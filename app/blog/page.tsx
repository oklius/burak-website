import type { Metadata } from "next";
import BlogList from "@/components/BlogList";
import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog - Growth Marketing Notes by Burak Öztürk",
  description:
    "Short practical articles on experiment-driven growth, lookalike audiences, and Klaviyo lifecycle automation.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="pt-20">
      <Container>
        <section className="py-14 sm:py-20">
          <Card className="bg-surface p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Blog
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-6xl">
              Practical notes on paid growth, creative testing, and lifecycle
              systems.
            </h1>
          </Card>
        </section>
        <BlogList />
      </Container>
    </main>
  );
}
