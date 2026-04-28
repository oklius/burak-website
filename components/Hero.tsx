"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Send } from "lucide-react";
import Container from "@/components/Container";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { metrics } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(20,20,20,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,20,20,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-50 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />
      <Container className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-12 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Open to new opportunities and collaborations
            </p>
            <h1 className="max-w-4xl text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Burak Öztürk - Performance Marketing & Product Growth
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              I help teams turn paid media, lifecycle CRM, and creative testing
              into clear growth systems. 6+ years across US, Canada, Turkey, and
              EMEA, with remote-friendly collaboration across design, data, and
              product teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <LinkButton href="/contact">
              <Mail size={18} aria-hidden /> Contact
            </LinkButton>
            <LinkButton href={siteConfig.linkedin} variant="secondary" target="_blank" rel="noreferrer">
              <Send size={18} aria-hidden /> LinkedIn
            </LinkButton>
            <LinkButton href={siteConfig.cvPath} variant="outline" download>
              <Download size={18} aria-hidden /> Download CV
            </LinkButton>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Card className="h-full p-4">
                  <p className="text-xl font-semibold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">
                    {metric.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-neutral-200 bg-surface shadow-xl md:h-56 md:w-56 dark:border-neutral-800">
            <Image
              src="/pp.png"
              alt="Burak Öztürk profile photo"
              fill
              priority={true}
              sizes="(max-width: 768px) 160px, 224px"
              className="rounded-full object-cover object-center md:object-[50%_10%]"
            />
          </div>
          <Card className="absolute -bottom-4 left-0 right-0 mx-auto w-[min(92%,360px)] p-4">
            <p className="text-sm font-semibold text-foreground">
              Data-powered decisions, creative results
            </p>
            <p className="mt-1 text-sm text-muted">
              Paid acquisition, attribution, lifecycle CRM, and creative
              operations in one practical growth loop.
            </p>
            <Link
              href="/work"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              View case studies <ArrowRight size={16} aria-hidden />
            </Link>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
