import Section from "@/components/Section";
import MotionSection from "@/components/MotionSection";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { education, languages, timeline } from "@/lib/data";

export default function AboutSection({ compact = false }: { compact?: boolean }) {
  const visibleTimeline = compact ? timeline.slice(0, 3) : timeline;

  return (
    <Section id="about" kicker="About" title="Growth work with a clear operating system">
      <MotionSection>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5 text-base leading-8 text-muted">
            <p>
              I am a performance marketing and growth marketing specialist with
              6+ years of experience building acquisition systems across paid
              media, analytics, CRM, and creative testing.
            </p>
            <p>
              I have managed $100K+ monthly ad budgets across the US, Canada,
              Turkey, and EMEA, using Meta Ads, Google Ads, TikTok Ads, Twitter
              Ads, and additional growth channels.
            </p>
            <p>
              My strongest work happens at the intersection of data and
              creative: clear measurement, fast experiments, practical creative
              briefs, and close collaboration with design and data teams.
            </p>
            <p>
              I am remote-friendly and open to full-time roles, consulting
              projects, and collaborations where the growth problem is real and
              the team wants disciplined execution.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="p-5">
                <p className="mb-3 text-sm font-semibold text-foreground">
                  Education
                </p>
                <div className="grid gap-2">
                  {education.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
              <Card className="p-5">
                <p className="mb-3 text-sm font-semibold text-foreground">
                  Languages
                </p>
                <div className="grid gap-2">
                  {languages.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-border sm:block" />
            <div className="space-y-4">
              {visibleTimeline.map((item) => (
                <Card key={`${item.company}-${item.period}`} className="relative p-5 sm:ml-10">
                  <span className="absolute -left-[3.25rem] top-6 hidden h-4 w-4 rounded-full border-4 border-background bg-accent sm:block" />
                  <p className="text-sm font-semibold text-accent">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-muted">{item.company}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.summary}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>
    </Section>
  );
}
