import AboutSection from "@/components/AboutSection";
import BlogList from "@/components/BlogList";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import MotionSection from "@/components/MotionSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import Testimonials from "@/components/Testimonials";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { homeHighlights } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <Container>
        <section className="py-16 sm:py-20">
          <MotionSection>
            <div className="grid gap-4 md:grid-cols-3">
              {homeHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon size={22} aria-hidden />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </MotionSection>
        </section>
        <AboutSection compact />
        <ServicesSection />
        <SkillsSection />
        <PortfolioGrid limit={3} />
        <Testimonials />
        <BlogList limit={3} />
        <section className="py-16 sm:py-20">
          <Card className="grid gap-6 bg-foreground p-8 text-background md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-background/70">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-[var(--font-display)]">
                Need a growth partner who can connect media, creative, and data?
              </h2>
            </div>
            <LinkButton href="/contact" variant="secondary">
              Start a conversation
            </LinkButton>
          </Card>
        </section>
      </Container>
    </main>
  );
}
