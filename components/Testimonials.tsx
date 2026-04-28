import { ExternalLink } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import Section from "@/components/Section";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function Testimonials() {
  return (
    <Section id="proof" kicker="Social proof" title="Teams and brands in the orbit">
      <MotionSection>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.company} className="p-6">
              <p className="text-sm font-semibold text-foreground">{item.company}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{item.quote}</p>
            </Card>
          ))}
        </div>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
        >
          See LinkedIn recommendations <ExternalLink size={16} aria-hidden />
        </a>
      </MotionSection>
    </Section>
  );
}
