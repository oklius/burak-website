function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanSubject = typeof subject === "string" ? subject.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!isValidEmail(cleanEmail)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // TODO: Connect real email delivery later via Resend, Formspree, or SMTP.
    console.log("Contact form submission", {
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error", error);

    return Response.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
