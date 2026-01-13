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
  const classes = ["scroll-mt-24 py-16", className].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes}>
      <div className="mb-8 flex flex-col gap-2">
        {kicker ? (
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            {kicker}
          </p>
        ) : null}
        <h2 className="text-2xl font-[var(--font-display)] tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
