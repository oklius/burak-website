import type { Metadata } from "next";
import Container from "@/components/Container";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services - Paid Media, Analytics, CRM, and Funnel Ops",
  description:
    "Campaign management, analytics and tracking, email CRM, and creative funnel operations for growth teams.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Container>
        <section className="py-14 sm:py-20">
          <Card className="grid gap-6 bg-surface p-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Services
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-6xl">
                Practical growth support for acquisition, tracking, lifecycle,
                and creative testing.
              </h1>
            </div>
            <LinkButton href="/contact">Discuss a project</LinkButton>
          </Card>
        </section>
        <ServicesSection />
        <SkillsSection />
      </Container>
    </main>
  );
}
