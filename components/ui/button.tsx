import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "border-foreground bg-foreground text-background hover:-translate-y-0.5 hover:border-accent hover:bg-accent dark:border-foreground dark:bg-foreground dark:text-background",
  secondary:
    "border-border bg-surface text-foreground shadow-sm hover:-translate-y-0.5 hover:border-accent hover:bg-accent/10",
  ghost:
    "border-transparent bg-transparent text-foreground hover:bg-surface hover:text-accent",
  outline:
    "border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-accent hover:bg-surface",
};

const base =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

export function LinkButton({
  className,
  variant = "primary",
  href,
  ...props
}: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classNames = cn(base, variants[variant], className);

  if (isExternal) {
    return <a href={href} className={classNames} {...props} />;
  }

  return <Link href={href} className={classNames} {...props} />;
}
