import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

// ── LM-002: HTML escape — prevents injection in email body ─
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// ── LM-005: Server-side email format validation ────────────
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,253}\.[^\s@]{1,63}$/;

// ── LM-007: Per-field length limits ───────────────────────
const LIMITS = { name: 100, email: 254, phone: 20, company: 200, message: 2000 };

function buildHtml(fields: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  interest?: string;
  message: string;
}) {
  const row = (label: string, value: string, isLast = false) => `
    <tr>
      <td width="130" valign="top" style="
        padding: 14px 20px 14px 0;
        font-family: Arial, sans-serif;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #A08C72;
        white-space: nowrap;
        border-bottom: ${isLast ? "none" : "1px solid #EDE8E0"};
      ">${label}</td>
      <td valign="top" style="
        padding: 14px 0 14px 20px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        color: #1C1C1A;
        line-height: 1.6;
        border-left: 1px solid #EDE8E0;
        border-bottom: ${isLast ? "none" : "1px solid #EDE8E0"};
      ">${value}</td>
    </tr>`;

  // All user fields are escaped via esc() before interpolation (LM-002)
  const safeName    = esc(fields.name);
  const safeEmail   = esc(fields.email);
  const safePhone   = esc(fields.phone   ?? "—");
  const safeCompany = esc(fields.company ?? "—");
  const safeInterest = esc(fields.interest ?? "—");
  const safeMessage = esc(fields.message);

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F0EBE3;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F0EBE3;padding:40px 16px;">
<tr><td align="center">

  <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#FFFFFF;">

    <!-- Header -->
    <tr>
      <td align="center" style="background:#2C4A2D;padding:40px 40px 32px;">

        <img src="cid:logo" alt="Linen Mantra" height="72" style="display:block;margin:0 auto;max-width:220px;" />

        <table cellpadding="0" cellspacing="0" border="0" style="margin:20px auto 18px;">
          <tr>
            <td style="width:50px;border-bottom:1px solid rgba(201,164,82,0.6);vertical-align:middle;"> </td>
            <td style="padding:0 10px;vertical-align:middle;">
              <img src="cid:leaf" alt="" width="18" height="16" style="display:block;" />
            </td>
            <td style="width:50px;border-bottom:1px solid rgba(201,164,82,0.6);vertical-align:middle;"> </td>
          </tr>
        </table>

        <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;color:#C9A452;">
          Web Enquiry from Linen Mantra
        </p>
      </td>
    </tr>

    <!-- Gold border -->
    <tr>
      <td style="background:#C9A452;height:2px;font-size:0;line-height:0;"> </td>
    </tr>

    <!-- Intro strip -->
    <tr>
      <td style="background:#F8F5F0;padding:16px 40px;border-bottom:1px solid #EDE8E0;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#6B6560;letter-spacing:0.04em;">
          A new enquiry has been submitted via the Linen Mantra website.
        </p>
      </td>
    </tr>

    <!-- Fields -->
    <tr>
      <td style="padding:8px 40px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          ${row("Name",    safeName)}
          ${row("Email",   `<a href="mailto:${safeEmail}" style="color:#2C4A2D;text-decoration:none;">${safeEmail}</a>`)}
          ${row("Phone",   safePhone)}
          ${row("Company", safeCompany)}
          ${row("Interest", safeInterest)}
          ${row("Message", `<span style="white-space:pre-wrap;">${safeMessage}</span>`, true)}
        </table>
      </td>
    </tr>

    <!-- Reply CTA -->
    <tr>
      <td style="padding:0 40px 36px;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:#2C4A2D;padding:12px 28px;">
              <a href="mailto:${safeEmail}" style="font-family:Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#F8F5F0;text-decoration:none;">
                Reply to ${safeName} &rarr;
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Gold border -->
    <tr>
      <td style="background:#C9A452;height:1px;font-size:0;line-height:0;"> </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background:#2C4A2D;padding:20px 40px;">
        <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.12em;color:rgba(248,245,240,0.45);text-transform:uppercase;">
          &copy; ${new Date().getFullYear()} Linen Mantra &nbsp;&middot;&nbsp; Silverline Fashion Fabrics Ltd. &nbsp;&middot;&nbsp; Mumbai, India
        </p>
      </td>
    </tr>

  </table>

</td></tr>
</table>

</body>
</html>`;
}

export async function POST(req: NextRequest) {
  // ── Parse body safely (LM-004) ──────────────────────────
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, company, interest, message, website } =
    body as Record<string, string | undefined>;

  // ── LM-009: Honeypot — bots fill this, humans leave blank ─
  if (website) {
    return NextResponse.json({ ok: true }); // Silent reject
  }

  // ── Required fields ──────────────────────────────────────
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // ── LM-005: Email format validation ─────────────────────
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  // ── LM-007: Length limits ────────────────────────────────
  if (
    name.length    > LIMITS.name    ||
    email.length   > LIMITS.email   ||
    (phone   && phone.length   > LIMITS.phone)   ||
    (company && company.length > LIMITS.company) ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: "Input exceeds maximum length" }, { status: 413 });
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // ── LM-004: Wrap sendMail in try/catch ───────────────────
  try {
    await transporter.sendMail({
      from:    `"Linen Mantra Website" <${process.env.SMTP_USER}>`,
      to:      process.env.SMTP_TO,
      subject: "Web Inquiry from Linen Mantra",
      html:    buildHtml({ name, email, phone, company, interest, message }),
      replyTo: email, // validated above — safe to use
      attachments: [
        {
          filename: "companylogo.png",
          path: path.join(process.cwd(), "public/email/companylogo.png"),
          cid: "logo",
        },
        {
          filename: "leaf.webp",
          path: path.join(process.cwd(), "public/email/leaf.webp"),
          cid: "leaf",
        },
      ],
    });
  } catch (err) {
    console.error("[contact] SMTP error:", err instanceof Error ? err.message : String(err));
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
