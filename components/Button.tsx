import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-foreground bg-foreground text-background hover:border-accent hover:bg-accent",
  secondary:
    "border-border bg-surface text-foreground hover:border-accent hover:bg-background",
  ghost: "border-transparent text-foreground hover:text-accent",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return <a className={classes} {...props} />;
}
