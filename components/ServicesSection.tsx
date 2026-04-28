import MotionSection from "@/components/MotionSection";
import Section from "@/components/Section";
import { Card } from "@/components/ui/card";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <Section id="services" kicker="Services" title="Focused growth support">
      <MotionSection>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group min-h-64 p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-foreground/10"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted transition group-hover:text-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </MotionSection>
    </Section>
  );
}
