import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyChart from "@/components/CaseStudyChart";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/lib/data";
import { pageMetadata } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return pageMetadata({
    title: `${study.company} Case Study - Burak Öztürk`,
    description: study.impact,
    path: `/work/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="pt-20">
      <Container>
        <section className="py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr]">
            <Card className="p-8">
              <Badge>{study.period}</Badge>
              <h1 className="mt-5 text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-6xl">
                {study.company}
              </h1>
              <p className="mt-4 text-xl text-foreground">{study.role}</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
                {study.impact}
              </p>
            </Card>
            <Card className="flex items-center justify-center p-8">
              <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-foreground text-4xl font-bold text-background">
                {study.logoText}
              </div>
            </Card>
          </div>
        </section>

        <section className="grid gap-4 py-8 lg:grid-cols-3">
          {[
            ["Challenge", study.challenge],
            ["Approach", study.approach],
            [
              "Lessons",
              "The strongest growth loops came from connecting channel data, creative direction, and cross-functional execution instead of treating each as separate work.",
            ],
          ].map(([title, text]) => (
            <Card key={title} className="p-6">
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </Card>
          ))}
        </section>

        <section className="grid gap-8 py-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground">Results</h2>
            <ul className="mt-5 grid gap-3">
              {study.results.map((result) => (
                <li key={result} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {result}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Metric Snapshot
              </h2>
              <p className="mt-2 text-sm text-muted">
                Indexed and source-CV metrics shown together for quick scanning.
              </p>
            </div>
            <CaseStudyChart data={study.metrics} />
          </Card>
        </section>
      </Container>
    </main>
  );
}
