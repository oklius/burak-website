import MotionSection from "@/components/MotionSection";
import Section from "@/components/Section";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/data";

export default function PortfolioGrid({ limit }: { limit?: number }) {
  const studies = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <Section id="work" kicker="Work" title="Case studies with measurable context">
      <MotionSection>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} {...study} />
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
