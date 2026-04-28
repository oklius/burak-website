"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b transition",
        isScrolled
          ? "border-border bg-background/92 shadow-sm backdrop-blur"
          : "border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-[var(--font-display)] text-lg tracking-tight text-foreground"
          aria-label="Burak Öztürk home"
        >
          Burak Öztürk
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active && "bg-surface text-foreground underline decoration-accent underline-offset-8",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Link
            href={siteConfig.cvPath}
            download
            className="rounded-md border border-border bg-surface px-3 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:bg-accent/10"
          >
            Download CV
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            className="h-10 w-10 px-0"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </Button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.cvPath}
              download
              className="rounded-md bg-foreground px-3 py-3 text-center text-sm font-semibold text-background"
            >
              Download CV
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
