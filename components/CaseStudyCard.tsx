import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type CaseStudyCardProps = {
  slug: string;
  company: string;
  role: string;
  impact: string;
  logoText: string;
};

export default function CaseStudyCard({
  slug,
  company,
  role,
  impact,
  logoText,
}: CaseStudyCardProps) {
  return (
    <Card className="group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-foreground/10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background">
          {logoText}
        </div>
        <Badge>{role}</Badge>
      </div>
      <h3 className="mt-6 text-2xl font-[var(--font-display)] text-foreground">
        {company}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{impact}</p>
      <Link
        href={`/work/${slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
      >
        View Case Study
        <ArrowRight
          size={16}
          aria-hidden
          className="transition group-hover:translate-x-1"
        />
      </Link>
    </Card>
  );
}
