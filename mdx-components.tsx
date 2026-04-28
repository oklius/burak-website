import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold text-foreground">{children}</h2>
    ),
    p: ({ children }) => <p className="mt-5 leading-8 text-muted">{children}</p>,
    ...components,
  };
}
