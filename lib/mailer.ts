import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

type ContactMessage = {
  name: string;
  email: string;
  message: string;
  attachment?: {
    filename: string;
    content: Buffer;
    contentType?: string;
  };
};

export async function sendContactEmail({
  name,
  email,
  message,
  attachment,
}: ContactMessage) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.info("Contact form submission without SMTP config", {
      name,
      email,
      message,
      hasAttachment: Boolean(attachment),
    });

    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${SMTP_USER}>`,
    replyTo: email,
    to: CONTACT_TO_EMAIL || siteConfig.email,
    subject: `New website inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    attachments: attachment ? [attachment] : undefined,
  });

  return { skipped: false };
}
