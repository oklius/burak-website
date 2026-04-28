import MotionSection from "@/components/MotionSection";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/lib/data";

export default function SkillsSection() {
  return (
    <Section id="skills" kicker="Skills & tools" title="Platforms I work inside">
      <MotionSection>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Card key={group.title} className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon size={20} aria-hidden />
                  </div>
                  <h3 className="font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </MotionSection>
    </Section>
  );
}
