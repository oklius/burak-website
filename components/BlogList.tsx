import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import Section from "@/components/Section";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/content/blog/posts";

export default function BlogList({ limit }: { limit?: number }) {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <Section id="blog" kicker="Writing" title="Notes on growth marketing">
      <MotionSection>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="flex h-full flex-col p-6">
              <div className="flex flex-wrap gap-3 text-xs text-muted">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} aria-hidden /> {post.publishedAt}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={14} aria-hidden /> {post.readingTime}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 text-sm font-semibold text-accent"
              >
                Read post
              </Link>
            </Card>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
