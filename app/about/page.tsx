import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import Container from "@/components/Container";
import SkillsSection from "@/components/SkillsSection";
import Testimonials from "@/components/Testimonials";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Burak Öztürk - Performance Marketing Specialist",
  description:
    "Background, experience timeline, education, languages, and working style for Burak Öztürk.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Container>
        <section className="py-14 sm:py-20">
          <Card className="bg-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-6xl">
              I build growth systems where media, measurement, CRM, and creative
              work together.
            </h1>
          </Card>
        </section>
        <AboutSection />
        <SkillsSection />
        <Testimonials />
      </Container>
    </main>
  );
}
