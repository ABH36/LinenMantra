import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, company, interest, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <table style="font-family:Arial,sans-serif;font-size:14px;color:#222;width:100%;max-width:600px;border-collapse:collapse;">
      <tr><td colspan="2" style="background:#2C4A2D;padding:20px 24px;">
        <span style="color:#F8F5F0;font-size:18px;font-weight:600;letter-spacing:1px;">Linen Mantra — Web Enquiry</span>
      </td></tr>
      <tr><td style="padding:8px 24px;width:140px;color:#666;border-bottom:1px solid #eee;">Name</td><td style="padding:8px 24px;border-bottom:1px solid #eee;">${name}</td></tr>
      <tr><td style="padding:8px 24px;color:#666;border-bottom:1px solid #eee;">Email</td><td style="padding:8px 24px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px 24px;color:#666;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px 24px;border-bottom:1px solid #eee;">${phone || "—"}</td></tr>
      <tr><td style="padding:8px 24px;color:#666;border-bottom:1px solid #eee;">Company</td><td style="padding:8px 24px;border-bottom:1px solid #eee;">${company || "—"}</td></tr>
      <tr><td style="padding:8px 24px;color:#666;border-bottom:1px solid #eee;">Interest</td><td style="padding:8px 24px;border-bottom:1px solid #eee;">${interest || "—"}</td></tr>
      <tr><td style="padding:8px 24px;color:#666;vertical-align:top;">Message</td><td style="padding:8px 24px;white-space:pre-wrap;">${message}</td></tr>
    </table>
  `;

  await transporter.sendMail({
    from: `"Linen Mantra Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_TO,
    subject: "web inquiry from linen mantra",
    html,
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
