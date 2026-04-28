export const siteConfig = {
  name: "Burak Öztürk",
  title: "Burak Öztürk - Performance Marketing & Product Growth",
  description:
    "Performance marketing and product growth specialist in Istanbul with 6+ years across paid media, analytics, lifecycle CRM, and creative testing.",
  url: "https://burakozturk.me",
  email: "burakozturkmee@gmail.com",
  phone: "+90 543 439 7287",
  location: "Istanbul, Turkey",
  linkedin: "https://www.linkedin.com/in/burakozturkme/",
  twitter: "https://twitter.com/burakozturkme",
  cvPath: "/BurakOzturk_Resume_CV_2026.pdf",
};

export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}) {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
