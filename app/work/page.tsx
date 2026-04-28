import type { Metadata } from "next";
import Container from "@/components/Container";
import PortfolioGrid from "@/components/PortfolioGrid";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Work - Burak Öztürk Case Studies",
  description:
    "Case studies from Mükellef, Pedal Commander, KitUP, Digiens Media, and freelance growth consulting.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="pt-20">
      <Container>
        <section className="py-14 sm:py-20">
          <Card className="bg-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Work
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-6xl">
              Concise case studies from paid acquisition, lifecycle CRM, and
              creative growth work.
            </h1>
          </Card>
        </section>
        <PortfolioGrid />
      </Container>
    </main>
  );
}
