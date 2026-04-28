"use client";

import { Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const bodyMessage = String(formData.get("message") || "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message: bodyMessage }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send message.");
      }

      setStatus("success");
      setMessage("Message sent successfully");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email Burak directly.",
      );
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required minLength={2} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required minLength={10} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="attachment">Optional attachment</Label>
        <Input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
        />
      </div>
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          <Loader2 className="animate-spin" size={18} aria-hidden />
        ) : (
          <Send size={18} aria-hidden />
        )}
        Send message
      </Button>
      {message ? (
        <p
          role="status"
          className={
            status === "error"
              ? "text-sm font-medium text-red-600 dark:text-red-400"
              : "text-sm font-medium text-accent"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
