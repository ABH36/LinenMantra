import { NextRequest, NextResponse } from "next/server";

// ── LM-006: Allowed origins for cross-origin check ────────
const ALLOWED_ORIGINS = [
  "https://linenmantra.com",
  "https://www.linenmantra.com",
];

// ── LM-001: In-memory rate limiter (per warm isolate) ─────
// Provides burst protection. On Vercel, each warm lambda instance
// tracks its own window — cross-instance requests start fresh.
// Combine with Cloudflare or Upstash for production-grade limits.
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT     = 5;              // max submissions per IP per hour

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isDev = process.env.NODE_ENV === "development";

  // ── Harden /api/contact ──────────────────────────────────
  if (pathname === "/api/contact") {
    // Only POST is allowed (Next.js handles 405 for other methods,
    // but reject early here for faster response)
    if (req.method !== "POST") {
      return new NextResponse(null, { status: 405 });
    }

    // ── LM-006: Origin check — block cross-origin API calls ─
    const origin = req.headers.get("origin");
    if (!isDev && origin && !ALLOWED_ORIGINS.includes(origin)) {
      return new NextResponse(
        JSON.stringify({ error: "Forbidden" }),
        { status: 403, headers: { "Content-Type": "application/json" } }
      );
    }

    // ── LM-001: Rate limit per IP ───────────────────────────
    if (!isDev) {
      const ip  = getIp(req);
      const now = Date.now();
      const rec = rateMap.get(ip);

      if (!rec || rec.resetAt < now) {
        rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
      } else if (rec.count >= RATE_LIMIT) {
        const retryAfter = Math.ceil((rec.resetAt - now) / 1000);
        return new NextResponse(
          JSON.stringify({ error: "Too many requests. Please try again later." }),
          {
            status: 429,
            headers: {
              "Content-Type": "application/json",
              "Retry-After": String(retryAfter),
            },
          }
        );
      } else {
        rec.count++;
      }
    }
  }

  return NextResponse.next();
}

// Only run middleware on API routes
export const config = {
  matcher: ["/api/:path*"],
};
