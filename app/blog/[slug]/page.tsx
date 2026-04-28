import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/content/blog/posts";
import { pageMetadata } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    title: `${post.title} - Burak Öztürk`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const Post = post.Component;

  return (
    <main className="pt-20">
      <Container className="max-w-4xl">
        <article className="py-14 sm:py-20">
          <Card className="p-8">
            <div className="flex flex-wrap gap-2">
              <Badge>{post.publishedAt}</Badge>
              <Badge>{post.readingTime}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-8 text-muted">{post.excerpt}</p>
          </Card>
          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
            <Post />
          </div>
        </article>
      </Container>
    </main>
  );
}
