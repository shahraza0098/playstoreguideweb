/**
 * Rate Limiter for Next.js App Router (Serverless-compatible)
 *
 * Supports:
 * 1. Distributed rate limiting via Upstash Redis REST API (zero npm dependencies)
 *    Requires: UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
 * 2. In-memory sliding window fallback for local development or single-instance deployments
 */

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number; // Unix timestamp in seconds
}

interface MemoryRecord {
  count: number;
  resetTime: number; // Unix timestamp in ms
}

const memoryStore = new Map<string, MemoryRecord>();

/**
 * Periodically purge stale entries from memoryStore to prevent memory growth
 */
function cleanupMemoryStore(now: number) {
  if (memoryStore.size > 500) {
    for (const [key, record] of memoryStore.entries()) {
      if (record.resetTime <= now) {
        memoryStore.delete(key);
      }
    }
  }
}

/**
 * Extract client IP address from proxy headers with safe fallbacks
 */
export function getClientIp(request: Request): string {
  // Cloudflare Connecting IP
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp && cfIp.trim()) {
    return cfIp.trim();
  }

  // Standard X-Forwarded-For header (take first IP in comma-separated chain)
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0].trim();
    if (firstIp) return firstIp;
  }

  // Direct proxy Real-IP
  const realIp = request.headers.get("x-real-ip");
  if (realIp && realIp.trim()) {
    return realIp.trim();
  }

  return "127.0.0.1";
}

/**
 * Rate limit check
 * @param identifier IP or unique client identifier
 * @param limit Max allowed requests within window (default: 5)
 * @param windowSeconds Window duration in seconds (default: 600s / 10 minutes)
 */
export async function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowSeconds: number = 600
): Promise<RateLimitResult> {
  const upstashUrl = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

  // 1. If Upstash Redis is configured, use distributed rate limiting
  if (upstashUrl && upstashToken) {
    try {
      const sanitizedUrl = upstashUrl.replace(/\/+$/, "");
      const key = `ratelimit:contact:${identifier}`;

      // Pipeline INCR + EXPIRE (if new key)
      const res = await fetch(`${sanitizedUrl}/pipeline`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${upstashToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["INCR", key],
          ["EXPIRE", key, windowSeconds],
        ]),
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        // data = [{ result: number }, { result: number }]
        const currentCount = Number(data[0]?.result ?? 1);
        const remaining = Math.max(0, limit - currentCount);
        const reset = Math.floor(Date.now() / 1000) + windowSeconds;

        return {
          success: currentCount <= limit,
          limit,
          remaining,
          reset,
        };
      } else {
        console.warn(
          `[RateLimit] Upstash Redis returned HTTP ${res.status}. Falling back to in-memory rate limiting.`
        );
      }
    } catch (err) {
      console.warn(
        "[RateLimit] Upstash Redis connection error. Falling back to in-memory rate limiting:",
        err instanceof Error ? err.message : err
      );
    }
  }

  // 2. Fallback: In-memory sliding window
  const now = Date.now();
  cleanupMemoryStore(now);

  const existing = memoryStore.get(identifier);

  if (!existing || existing.resetTime <= now) {
    const resetTime = now + windowSeconds * 1000;
    memoryStore.set(identifier, { count: 1, resetTime });
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: Math.floor(resetTime / 1000),
    };
  }

  existing.count += 1;
  const remaining = Math.max(0, limit - existing.count);
  const reset = Math.floor(existing.resetTime / 1000);

  return {
    success: existing.count <= limit,
    limit,
    remaining,
    reset,
  };
}
