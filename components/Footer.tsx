import Link from "next/link";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import Container from "@/components/Container";
import { LinkButton } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-xl space-y-4">
          <p className="font-[var(--font-display)] text-2xl text-foreground">
            Burak Öztürk
          </p>
          <p className="text-sm leading-6 text-muted">
            Performance marketing and product growth specialist. Open to
            full-time opportunities, consulting projects, and collaborations
            where disciplined acquisition can create measurable growth.
          </p>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="/contact">Start a conversation</LinkButton>
            <LinkButton href={siteConfig.cvPath} variant="outline" download>
              Download CV
            </LinkButton>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">Quick links</p>
          <nav className="grid gap-2 text-sm text-muted" aria-label="Footer">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">Contact</p>
          <div className="grid gap-3 text-sm text-muted">
            <a className="flex items-center gap-2 hover:text-accent" href={`mailto:${siteConfig.email}`}>
              <Mail size={16} aria-hidden /> {siteConfig.email}
            </a>
            <a className="flex items-center gap-2 hover:text-accent" href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
              <Phone size={16} aria-hidden /> {siteConfig.phone}
            </a>
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
          </div>
        </div>
      </Container>
      <div className="border-t border-border py-4">
        <Container>
          <p className="text-xs text-muted">
            Built in Istanbul with a focus on clarity and craft.
          </p>
        </Container>
      </div>
    </footer>
  );
}
