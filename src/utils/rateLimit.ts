import { NextRequest } from "next/server";

let requestCounts = new Map<string, number[]>();

const RATE_LIMIT_WINDOW_MS = 60000;
const RATE_LIMIT_MAX_REQUESTS = 10;

async function rateLimit(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("remoteAddress") || "unknown";
  const now = Date.now();

  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, []);
  }
  console.log("REQUEST COUNTS", requestCounts);

  const timestamps = requestCounts.get(ip) as number[];
  timestamps.push(now);

  console.log("TIMESTAMPS NOW", timestamps);

  while (timestamps.length && timestamps[0] <= now - RATE_LIMIT_WINDOW_MS) {
    timestamps.shift();
    console.log("TIMESTAMPS SHIFT", timestamps);
  }
  console.log("TIMESTAMPS LENGTH", timestamps.length);

  const remainingRequests = RATE_LIMIT_MAX_REQUESTS - timestamps.length;
  console.log(Math.ceil((timestamps[0] + RATE_LIMIT_WINDOW_MS - now) / 1000).toString());
  console.log(timestamps[0], RATE_LIMIT_WINDOW_MS, now);

  if (timestamps.length > RATE_LIMIT_MAX_REQUESTS) {
    return {
      success: false,
      headers: {
        "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": Math.ceil((timestamps[0] + RATE_LIMIT_WINDOW_MS - now) / 1000).toString(),
      },
    };
  }

  return {
    success: true,
    headers: {
      "X-RateLimit-Limit": RATE_LIMIT_MAX_REQUESTS.toString(),
      "X-RateLimit-Remaining": remainingRequests.toString(),
      "X-RateLimit-Reset": Math.ceil((timestamps[0] + RATE_LIMIT_WINDOW_MS - now) / 1000).toString(),
    },
  };
}

export default rateLimit;
