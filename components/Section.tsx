import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  kicker?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({
  id,
  title,
  kicker,
  className = "",
  children,
}: SectionProps) {
  const classes = ["scroll-mt-24 py-16 sm:py-20", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      <div className="mb-8 flex max-w-3xl flex-col gap-3">
        {kicker ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {kicker}
          </p>
        ) : null}
        <h2 className="text-3xl font-[var(--font-display)] tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
