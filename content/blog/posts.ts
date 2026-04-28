import ExperimentPost, {
  meta as experimentMeta,
} from "@/content/blog/experiment-driven-growth-marketing.mdx";
import KlaviyoPost, {
  meta as klaviyoMeta,
} from "@/content/blog/building-lifecycle-automations-with-klaviyo.mdx";
import LookalikePost, {
  meta as lookalikeMeta,
} from "@/content/blog/scaling-campaigns-with-lookalike-audiences.mdx";

export const blogPosts = [
  {
    slug: "experiment-driven-growth-marketing",
    ...experimentMeta,
    Component: ExperimentPost,
  },
  {
    slug: "scaling-campaigns-with-lookalike-audiences",
    ...lookalikeMeta,
    Component: LookalikePost,
  },
  {
    slug: "building-lifecycle-automations-with-klaviyo",
    ...klaviyoMeta,
    Component: KlaviyoPost,
  },
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
