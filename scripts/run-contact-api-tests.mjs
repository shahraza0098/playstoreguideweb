/**
 * Comprehensive Automated Test Suite for Contact API Route (/api/contact)
 */

const BASE_URL = "http://localhost:3000/api/contact";

async function postContact(payload, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const body = typeof payload === "string" ? payload : JSON.stringify(payload);

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers,
    body,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  return {
    status: res.status,
    headers: res.headers,
    data,
  };
}

let passed = 0;
let failed = 0;

function assert(condition, message, details = "") {
  if (condition) {
    console.log(`  PASS: ${message}`);
    passed++;
  } else {
    console.error(`  FAIL: ${message} - ${details}`);
    failed++;
  }
}

async function runTests() {
  console.log("==================================================");
  console.log("Starting Hardened Contact API Test Suite");
  console.log("==================================================\n");

  const validRenderedAt = Date.now() - 5000; // 5 seconds ago
  const testRunId = Math.floor(Math.random() * 200) + 1;
  const getTestIp = (section, index = 1) => `10.${testRunId}.${section}.${index}`;

  // 1. Malformed JSON and payload structure
  console.log("1. JSON & Payload Structure Checks:");
  {
    const res = await postContact("invalid-json{}}");
    assert(res.status === 400 && res.data?.error?.includes("JSON"), "Malformed JSON returns 400", JSON.stringify(res));

    const resArray = await postContact([1, 2, 3]);
    assert(resArray.status === 400 && resArray.data?.error?.includes("JSON object"), "Array body returns 400", JSON.stringify(resArray));

    const resPrimitive = await postContact(12345);
    assert(resPrimitive.status === 400, "Primitive body returns 400", JSON.stringify(resPrimitive));
  }

  // 2. Oversized Payload Limit
  console.log("\n2. Oversized Payload (Max 32KB) Check:");
  {
    const giantPayload = {
      name: "Test Developer",
      email: "dev@example.com",
      service: "closed-testing",
      message: "A".repeat(35 * 1024), // 35KB message
      renderedAt: validRenderedAt,
    };
    const res = await postContact(giantPayload);
    assert(res.status === 413, "Payload exceeding 32KB returns 413 Payload Too Large", `Status: ${res.status}`);
  }

  // 3. Honeypot Spam Protection
  console.log("\n3. Honeypot Spam Check:");
  {
    const honeypotPayload = {
      name: "Bot Spammer",
      email: "bot@spammer.com",
      service: "closed-testing",
      message: "Automated spam message here.",
      website: "https://spamlink.com",
      renderedAt: validRenderedAt,
    };
    const res = await postContact(honeypotPayload, { headers: { "X-Forwarded-For": getTestIp(3, 1) } });
    assert(res.status === 400 && res.data?.error?.includes("Invalid submission"), "Filled honeypot rejects with 400", JSON.stringify(res));
  }

  // 4. Form Timing & Velocity Checks
  console.log("\n4. Velocity & Timing Checks:");
  {
    // Fast submission (< 1500ms)
    const fastPayload = {
      name: "Fast Bot",
      email: "fast@example.com",
      service: "closed-testing",
      message: "This is submitted too fast.",
      renderedAt: Date.now() - 200, // only 200ms
    };
    const resFast = await postContact(fastPayload, { headers: { "X-Forwarded-For": getTestIp(4, 1) } });
    assert(resFast.status === 400 && resFast.data?.error?.includes("quickly"), "Submission < 1500ms returns 400", JSON.stringify(resFast));

    // Future timestamp
    const futurePayload = {
      name: "Future Bot",
      email: "future@example.com",
      service: "closed-testing",
      message: "Timestamp in the future.",
      renderedAt: Date.now() + 60000,
    };
    const resFuture = await postContact(futurePayload, { headers: { "X-Forwarded-For": getTestIp(4, 2) } });
    assert(resFuture.status === 400 && resFuture.data?.error?.includes("expired"), "Future timestamp returns 400", JSON.stringify(resFuture));

    // Invalid renderedAt type
    const invalidTypePayload = {
      name: "Invalid Type",
      email: "type@example.com",
      service: "closed-testing",
      message: "Non-numeric renderedAt value.",
      renderedAt: "not-a-number",
    };
    const resType = await postContact(invalidTypePayload, { headers: { "X-Forwarded-For": getTestIp(4, 3) } });
    assert(resType.status === 400 && resType.data?.error?.includes("invalid"), "Non-number renderedAt returns 400", JSON.stringify(resType));
  }

  // 5. Name Validation & Header Injection
  console.log("\n5. Name Validation Checks:");
  {
    // Too short
    const shortName = { name: "A", email: "dev@example.com", service: "closed-testing", message: "Valid message length.", renderedAt: validRenderedAt };
    const resShort = await postContact(shortName, { headers: { "X-Forwarded-For": getTestIp(5, 1) } });
    assert(resShort.status === 400, "Name < 2 chars returns 400", JSON.stringify(resShort));

    // Too long (> 100 chars)
    const longName = { name: "A".repeat(105), email: "dev@example.com", service: "closed-testing", message: "Valid message length.", renderedAt: validRenderedAt };
    const resLong = await postContact(longName, { headers: { "X-Forwarded-For": getTestIp(5, 2) } });
    assert(resLong.status === 400, "Name > 100 chars returns 400", JSON.stringify(resLong));

    // Header injection via newline in name
    const injectName = { name: "Attacker\r\nBcc: evil@target.com", email: "dev@example.com", service: "closed-testing", message: "Valid message length.", renderedAt: validRenderedAt };
    const resInject = await postContact(injectName, { headers: { "X-Forwarded-For": getTestIp(5, 3) } });
    assert(resInject.status === 400 && resInject.data?.error?.includes("newline"), "Newline in name rejected with 400", JSON.stringify(resInject));
  }

  // 6. Email Validation & Header Injection
  console.log("\n6. Email Validation Checks:");
  {
    const testCases = [
      { email: "", desc: "Empty email" },
      { email: "plainaddress", desc: "No @" },
      { email: "@missingusername.com", desc: "Missing username" },
      { email: "username@.com", desc: "Missing domain" },
      { email: "user@domain..com", desc: "Consecutive dots in domain" },
      { email: "user@domain", desc: "No TLD dot" },
      { email: "victim@example.com\r\nCc: bystander@example.com", desc: "Header injection in email" },
      { email: "a".repeat(250) + "@domain.com", desc: "Email > 254 characters" },
      { email: "<script>alert(1)</script>@example.com", desc: "HTML tags in email" },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const tc = testCases[i];
      const res = await postContact(
        { name: "Test User", email: tc.email, service: "closed-testing", message: "Valid message here.", renderedAt: validRenderedAt },
        { headers: { "X-Forwarded-For": getTestIp(6, i + 1) } }
      );
      assert(res.status === 400, `Invalid email [${tc.desc}] rejected with 400`, `Received status: ${res.status}`);
    }
  }

  // 7. Service Category Allowlist
  console.log("\n7. Service Allowlist Checks:");
  {
    const invalidService = {
      name: "Valid User",
      email: "valid@example.com",
      service: "unauthorized-service-name",
      message: "Valid message description.",
      renderedAt: validRenderedAt,
    };
    const res = await postContact(invalidService, { headers: { "X-Forwarded-For": getTestIp(7, 1) } });
    assert(res.status === 400 && res.data?.error?.includes("service"), "Invalid service rejected with 400", JSON.stringify(res));
  }

  // 8. Package Name Validation
  console.log("\n8. Package Name Checks:");
  {
    const invalidPackage = {
      name: "Valid User",
      email: "valid@example.com",
      service: "closed-testing",
      packageName: "com.example.app<script>",
      message: "Valid message description.",
      renderedAt: validRenderedAt,
    };
    const res = await postContact(invalidPackage, { headers: { "X-Forwarded-For": getTestIp(8, 1) } });
    assert(res.status === 400 && res.data?.error?.includes("Package name"), "Malformed package name rejected with 400", JSON.stringify(res));

    const validPackage = {
      name: "Valid User",
      email: "valid@example.com",
      service: "closed-testing",
      packageName: "com.playstoreguide.testapp",
      message: "Valid message description.",
      renderedAt: validRenderedAt,
    };
    const resValid = await postContact(validPackage, { headers: { "X-Forwarded-For": getTestIp(8, 2) } });
    assert(resValid.status === 200 || resValid.status === 502, "Valid package name accepted by validation", `Status: ${resValid.status}`);
  }

  // 9. Message Validation
  console.log("\n9. Message Validation Checks:");
  {
    const shortMessage = {
      name: "Valid User",
      email: "valid@example.com",
      service: "closed-testing",
      message: "Short",
      renderedAt: validRenderedAt,
    };
    const resShort = await postContact(shortMessage, { headers: { "X-Forwarded-For": getTestIp(9, 1) } });
    assert(resShort.status === 400, "Message < 10 chars rejected with 400", JSON.stringify(resShort));

    const giantMessage = {
      name: "Valid User",
      email: "valid@example.com",
      service: "closed-testing",
      message: "M".repeat(5005),
      renderedAt: validRenderedAt,
    };
    const resGiant = await postContact(giantMessage, { headers: { "X-Forwarded-For": getTestIp(9, 2) } });
    assert(resGiant.status === 400, "Message > 5000 chars rejected with 400", JSON.stringify(resGiant));
  }

  // 10. Rate Limiting Check
  console.log("\n10. Rate Limiting (5 requests per 10m) Check:");
  {
    const rateLimitIp = getTestIp(10, 99);
    let hitRateLimit = false;
    let rateLimitHeadersFound = false;

    for (let i = 1; i <= 6; i++) {
      const res = await postContact(
        {
          name: `User ${i}`,
          email: `user${i}@example.com`,
          service: "closed-testing",
          message: `This is test inquiry message number ${i}.`,
          renderedAt: validRenderedAt,
        },
        { headers: { "X-Forwarded-For": rateLimitIp } }
      );

      if (res.status === 429) {
        hitRateLimit = true;
        if (res.headers.get("Retry-After")) {
          rateLimitHeadersFound = true;
        }
        break;
      }
    }

    assert(hitRateLimit, "6th rapid submission triggers HTTP 429 Too Many Requests");
    assert(rateLimitHeadersFound, "HTTP 429 response includes Retry-After header");
  }

  // 11. HTML Injection / XSS Escaping Verification
  console.log("\n11. HTML Injection & Sanitization Test:");
  {
    const xssPayload = {
      name: "Dr. <script>alert('xss')</script> John & Doe",
      email: "clean.email@example.com",
      service: "closed-testing",
      packageName: "com.example.secure_app",
      message: "Line 1 with <b onmouseover='alert(1)'>injection</b>.\nLine 2 with <img src=x onerror=alert(2)>.\nLine 3 with & symbols.",
      renderedAt: validRenderedAt,
    };
    const res = await postContact(xssPayload, { headers: { "X-Forwarded-For": getTestIp(11, 1) } });
    assert(res.status === 200 || res.status === 502, "XSS test payload processed through sanitizer without crashing", `Status: ${res.status}`);
  }

  // 12. Valid Delivery Verification
  console.log("\n12. Valid Submission & Resend Delivery Flow:");
  {
    const validPayload = {
      name: "Elena Vance",
      email: "elena.vance@example.com",
      service: "closed-testing",
      stage: "closed-testing",
      urgency: "immediate",
      packageName: "com.elenavance.androidapp",
      message: "We need 20 active testers for our new productivity app. Our closed testing track is already created.",
      renderedAt: validRenderedAt,
    };
    const res = await postContact(validPayload, { headers: { "X-Forwarded-For": getTestIp(12, 1) } });

    console.log(`    Response status: ${res.status}`);
    console.log(`    Response data: ${JSON.stringify(res.data)}`);

    if (res.status === 200) {
      assert(res.data?.success === true, "Delivery confirmed by Resend API with HTTP 200 success response");
      assert(res.data?.backendConnected === true, "backendConnected flag is true");
    } else if (res.status === 502) {
      assert(res.data?.success === false, "Resend API returned 502 with safe error message (e.g. domain verification or API key)");
      assert(!JSON.stringify(res.data).includes("re_"), "Response does not leak RESEND_API_KEY");
      assert(!JSON.stringify(res.data).includes("productivity app"), "Response does not leak private visitor message");
    }
  }

  console.log("\n==================================================");
  console.log(`Test Suite Finished: ${passed} Passed, ${failed} Failed`);
  console.log("==================================================");

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error("Test execution error:", err);
  process.exit(1);
});
