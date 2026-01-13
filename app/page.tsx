import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-[var(--font-display)] text-lg tracking-tight text-foreground"
          >
            Burak Öztürk
          </a>
          <nav
            aria-label="Primary"
            className="flex items-center gap-4 text-sm text-muted sm:gap-6"
          >
            {["About", "Work", "Now", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item}
              </a>
            ))}
          </nav>
        </Container>
      </header>

      <main id="top">
        <section className="min-h-[calc(100vh-4rem)] py-16 sm:py-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div
                    aria-label="Burak Öztürk"
                    role="img"
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface bg-[url('/avatar.jpg')] bg-cover bg-center text-xs font-semibold uppercase tracking-[0.3em] text-accent md:h-20 md:w-20"
                  >
                    <span aria-hidden="true">BO</span>
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted">
                    <p>Performance marketing</p>
                    <p>Product growth</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h1 className="text-4xl font-[var(--font-display)] tracking-tight text-foreground sm:text-5xl">
                    Burak Öztürk
                  </h1>
                  <p className="text-lg text-foreground">
                    Performance marketing &amp; product growth — building
                    acquisition systems and shipping products.
                  </p>
                  <div className="space-y-1 text-sm text-muted">
                    <p>Based in Istanbul, Turkey.</p>
                    <p>
                      Digital Marketing Specialist at Mükellef, building personal
                      products and projects.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button href="#contact">Contact</Button>
                  <Button
                    variant="secondary"
                    href="https://www.linkedin.com/in/burakozturkme/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="ghost"
                    href="/BurakOzturk_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    Download CV (PDF)
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <Card>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Core areas
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground">
                    <li>Meta Ads &amp; Google Ads</li>
                    <li>Measurement: GA4 &amp; GTM</li>
                    <li>Lifecycle CRM: Klaviyo</li>
                    <li>Creative testing &amp; funnel strategy</li>
                  </ul>
                </Card>
                <Card className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">
                    Experience
                  </p>
                  <p className="text-sm text-foreground">
                    6+ years in performance marketing &amp; growth.
                  </p>
                  <p className="text-sm text-muted">
                    Remote-friendly and cross-functional by default.
                  </p>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <Section id="about" title="About" className="border-t border-border">
            <div className="space-y-3 text-base leading-relaxed text-muted">
              <p>Experimentation keeps me honest; measurement keeps me focused.</p>
              <p>I build acquisition systems across Meta Ads and Google Ads.</p>
              <p>GA4, GTM, and clear analytics are part of every launch.</p>
              <p>Creative testing is the lever I pull most often.</p>
              <p>I bring lifecycle CRM (Klaviyo) into the mix for retention.</p>
              <p>I enjoy building small products and iterating fast.</p>
              <p>Remote-first and comfortable with cross-functional teams.</p>
              <p>
                6+ years in performance marketing and growth, mostly in
                e-commerce.
              </p>
            </div>
          </Section>

          <Section id="work" title="Work" className="border-t border-border">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="text-lg font-[var(--font-display)] text-foreground">
                  Currently
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Digital Marketing Specialist at Mükellef (Jan 2025 – Present),
                  leading acquisition systems, measurement, creative testing,
                  and lifecycle growth.
                </p>
              </Card>
              <Card>
                <h3 className="text-lg font-[var(--font-display)] text-foreground">
                  Previously
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Performance marketing and growth roles in e-commerce, running
                  paid social, search, and CRM across US, Canada, Turkey, and
                  EMEA.
                </p>
              </Card>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Card className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Markets
                </p>
                <p className="text-sm text-foreground">
                  US / Canada / Turkey / EMEA
                </p>
              </Card>
              <Card className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Focus
                </p>
                <p className="text-sm text-foreground">
                  Meta &amp; Google Ads, analytics, measurement, lifecycle CRM
                </p>
              </Card>
              <Card className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Approach
                </p>
                <p className="text-sm text-foreground">
                  Experiment-driven, creative iteration, funnel thinking
                </p>
              </Card>
            </div>
          </Section>

          <Section id="now" title="Now" className="border-t border-border">
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                Building personal products alongside client work.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                Improving measurement systems and reporting clarity.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                Exploring remote and global growth opportunities.
              </li>
            </ul>
          </Section>

          <Section
            id="contact"
            title="Contact"
            className="border-t border-border pb-20"
          >
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4 text-sm text-muted">
                <p>
                  Want to collaborate, brainstorm, or compare notes on growth?
                  Reach out anytime.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:burakozturkmee@gmail.com"
                    className="block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    burakozturkmee@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/burakozturkme/"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button href="mailto:burakozturkmee@gmail.com">Email</Button>
                <Button
                  variant="secondary"
                  href="/BurakOzturk_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download CV (PDF)
                </Button>
                <Button
                  variant="ghost"
                  href="https://www.linkedin.com/in/burakozturkme/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Section>
        </Container>
      </main>

      <footer className="border-t border-border py-8">
        <Container>
          <p className="text-xs text-muted">
            Built in Istanbul with a focus on clarity and craft.
          </p>
        </Container>
      </footer>
    </div>
  );
}
