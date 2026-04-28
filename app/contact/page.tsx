import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { pageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Burak Öztürk",
  description:
    "Contact Burak Öztürk for full-time digital marketing roles, consulting projects, or growth collaborations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Container>
        <section className="py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
              <h1 className="mt-4 text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-6xl">
                Let’s talk about growth.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                I am based in Istanbul and available for remote-friendly
                full-time roles, consulting projects, and focused collaborations.
              </p>

              <Card className="mt-8 grid gap-4 p-6">
                <a className="flex items-center gap-3 text-sm text-foreground hover:text-accent" href={`mailto:${siteConfig.email}`}>
                  <Mail size={18} aria-hidden /> {siteConfig.email}
                </a>
                <a className="flex items-center gap-3 text-sm text-foreground hover:text-accent" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
                  <Phone size={18} aria-hidden /> {siteConfig.phone}
                </a>
                <p className="flex items-center gap-3 text-sm text-foreground">
                  <MapPin size={18} aria-hidden /> {siteConfig.location}
                </p>
                <div className="flex gap-2 pt-2">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-md border border-border p-2 text-foreground hover:border-accent hover:text-accent"
                  >
                    <Send size={18} aria-hidden />
                  </a>
                  <a
                    href={siteConfig.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="rounded-md border border-border p-2 text-foreground hover:border-accent hover:text-accent"
                  >
                    <MessageCircle size={18} aria-hidden />
                  </a>
                </div>
              </Card>
            </div>
            <Card className="p-6">
              <ContactForm />
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
