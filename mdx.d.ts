declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const meta: {
    title: string;
    excerpt: string;
    publishedAt: string;
    readingTime: string;
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
