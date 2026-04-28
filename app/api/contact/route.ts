import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const file = formData.get("attachment");

  if (name.length < 2 || !email.includes("@") || message.length < 10) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  let attachment:
    | { filename: string; content: Buffer; contentType?: string }
    | undefined;

  if (file instanceof File && file.size > 0) {
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Please keep attachments under 5 MB." },
        { status: 400 },
      );
    }

    attachment = {
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
    };
  }

  const result = await sendContactEmail({ name, email, message, attachment });

  return NextResponse.json({
    message: result.skipped
      ? "Thanks. SMTP is not configured yet, so this was logged locally."
      : "Thanks. Your message has been sent.",
  });
}
