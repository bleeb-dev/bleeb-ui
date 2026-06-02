import * as React from "react";

type Item = {
  label: string;
  hint: string;
  src?: string;
  href: string;
  download?: string;
  aspect?: string;
  bg?: string;
};

const presentations: Item[] = [
  { label: "Deck · Dark", hint: ".pptx · 16:9 · 8 slides", href: "/brand/bleeb-deck-dark.pptx", aspect: "16/9", bg: "var(--bleeb-bg)" },
  { label: "Deck · Light", hint: ".pptx · 16:9 · 8 slides", href: "/brand/bleeb-deck-light.pptx", aspect: "16/9", bg: "var(--bleeb-text)" },
];

const documents: Item[] = [
  { label: "Document · letterhead", hint: ".docx · A4", href: "/brand/bleeb-document-template.docx", aspect: "1/1.414", bg: "var(--bleeb-text)" },
  { label: "One-pager · product brief", hint: ".docx · A4", href: "/brand/bleeb-one-pager.docx", aspect: "1/1.414", bg: "var(--bleeb-text)" },
];

const emails: Item[] = [
  { label: "Signature · minimal", hint: ".html", href: "/brand/email-signature-minimal.html" },
  { label: "Signature · full", hint: ".html · logo + socials", href: "/brand/email-signature-full.html" },
  { label: "Signature · launch", hint: ".html · with banner", href: "/brand/email-signature-launch.html" },
];

const linkedin: Item[] = [
  { label: "Personal banner", hint: "1584 × 396", src: "/brand/linkedin-personal-banner-1584x396.png", href: "/brand/linkedin-personal-banner-1584x396.png", aspect: "1584/396" },
  { label: "Company banner", hint: "1128 × 191", src: "/brand/linkedin-company-banner-1128x191.png", href: "/brand/linkedin-company-banner-1128x191.png", aspect: "1128/191" },
  { label: "Profile frame", hint: "400 × 400 · transparent", src: "/brand/linkedin-profile-frame-400x400.png", href: "/brand/linkedin-profile-frame-400x400.png", aspect: "1/1" },
  { label: "Post · square", hint: "1200 × 1200", src: "/brand/linkedin-post-square-1200x1200.png", href: "/brand/linkedin-post-square-1200x1200.png", aspect: "1/1" },
  { label: "Quote post", hint: "1200 × 1200", src: "/brand/linkedin-quote-1200x1200.png", href: "/brand/linkedin-quote-1200x1200.png", aspect: "1/1" },
  { label: "Carousel · 01 cover", hint: "1080 × 1350", src: "/brand/linkedin-carousel-1080x1350-01.png", href: "/brand/linkedin-carousel-1080x1350-01.png", aspect: "1080/1350" },
  { label: "Carousel · 02 problem", hint: "1080 × 1350", src: "/brand/linkedin-carousel-1080x1350-02.png", href: "/brand/linkedin-carousel-1080x1350-02.png", aspect: "1080/1350" },
  { label: "Carousel · 03 solution", hint: "1080 × 1350", src: "/brand/linkedin-carousel-1080x1350-03.png", href: "/brand/linkedin-carousel-1080x1350-03.png", aspect: "1080/1350" },
  { label: "Carousel · 04 proof", hint: "1080 × 1350", src: "/brand/linkedin-carousel-1080x1350-04.png", href: "/brand/linkedin-carousel-1080x1350-04.png", aspect: "1080/1350" },
  { label: "Carousel · 05 CTA", hint: "1080 × 1350", src: "/brand/linkedin-carousel-1080x1350-05.png", href: "/brand/linkedin-carousel-1080x1350-05.png", aspect: "1080/1350" },
];

const instagram: Item[] = [
  { label: "Story", hint: "1080 × 1920", src: "/brand/instagram-story-1080x1920.png", href: "/brand/instagram-story-1080x1920.png", aspect: "9/16" },
  { label: "Story · quote", hint: "1080 × 1920", src: "/brand/instagram-story-quote-1080x1920.png", href: "/brand/instagram-story-quote-1080x1920.png", aspect: "9/16" },
  { label: "Post", hint: "1080 × 1080", src: "/brand/instagram-post-1080x1080.png", href: "/brand/instagram-post-1080x1080.png", aspect: "1/1" },
  { label: "Post · announce", hint: "1080 × 1080", src: "/brand/instagram-post-announce-1080x1080.png", href: "/brand/instagram-post-announce-1080x1080.png", aspect: "1/1" },
  { label: "Reel cover", hint: "1080 × 1920", src: "/brand/instagram-reel-cover-1080x1920.png", href: "/brand/instagram-reel-cover-1080x1920.png", aspect: "9/16" },
  { label: "Avatar", hint: "320 × 320", src: "/brand/instagram-profile-avatar-320x320.png", href: "/brand/instagram-profile-avatar-320x320.png", aspect: "1/1" },
];

const tiktok: Item[] = [
  { label: "Cover", hint: "1080 × 1920", src: "/brand/tiktok-cover-1080x1920.png", href: "/brand/tiktok-cover-1080x1920.png", aspect: "9/16" },
  { label: "End card", hint: "1080 × 1920", src: "/brand/tiktok-endcard-1080x1920.png", href: "/brand/tiktok-endcard-1080x1920.png", aspect: "9/16" },
  { label: "Avatar", hint: "200 × 200", src: "/brand/tiktok-avatar-200x200.png", href: "/brand/tiktok-avatar-200x200.png", aspect: "1/1" },
];

const xcom: Item[] = [
  { label: "Header", hint: "1500 × 500", src: "/brand/x-header-1500x500.png", href: "/brand/x-header-1500x500.png", aspect: "3/1" },
  { label: "Post image", hint: "1600 × 900", src: "/brand/x-post-image-1600x900.png", href: "/brand/x-post-image-1600x900.png", aspect: "16/9" },
  { label: "Quote card", hint: "1080 × 1080", src: "/brand/x-quote-1080x1080.png", href: "/brand/x-quote-1080x1080.png", aspect: "1/1" },
  { label: "Avatar", hint: "400 × 400", src: "/brand/x-avatar-400x400.png", href: "/brand/x-avatar-400x400.png", aspect: "1/1" },
];

const github: Item[] = [
  { label: "Social preview", hint: "1280 × 640", src: "/brand/github-social-preview-1280x640.png", href: "/brand/github-social-preview-1280x640.png", aspect: "2/1" },
  { label: "README banner", hint: "1280 × 320", src: "/brand/github-banner-header.png", href: "/brand/github-banner-header.png", aspect: "4/1" },
  { label: "README.md", hint: "showcase repo readme", href: "/brand/github-README.md" },
  { label: "Profile README", hint: "org/user profile", href: "/brand/github-profile-README.md" },
];

const bundles = [
  { label: "Presentation pack", hint: ".pptx + .docx", href: "/brand/bleeb-presentation-pack.zip", accent: "var(--bleeb-cyan)" },
  { label: "Social pack", hint: "LinkedIn · IG · TikTok · X", href: "/brand/bleeb-social-pack.zip", accent: "var(--bleeb-violet)" },
  { label: "GitHub pack", hint: "banners + readmes", href: "/brand/bleeb-github-pack.zip", accent: "var(--bleeb-green)" },
  { label: "Full brand kit · v1.1", hint: "everything", href: "/brand/bleeb-brand-pack-v1.1.zip", accent: "var(--bleeb-amber)" },
];

function Card({ item }: { item: Item }) {
  const isImg = !!item.src;
  return (
    <a
      href={item.href}
      download
      className="group rounded-md border border-border bg-bleeb-bg overflow-hidden hover:border-bleeb-cyan transition-colors"
    >
      <div
        className="flex items-center justify-center overflow-hidden"
        style={{ aspectRatio: item.aspect || "4/3", background: item.bg || "var(--bleeb-surface-1)" }}
      >
        {isImg ? (
          <img src={item.src} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="font-mono text-xs text-bleeb-muted px-4 py-6 text-center">
            {item.hint.split(" · ")[0].toUpperCase()}
          </div>
        )}
      </div>
      <div className="border-t border-border p-3 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <div className="font-mono text-[11px] text-bleeb-text truncate">{item.label}</div>
          <div className="font-mono text-[10px] text-bleeb-muted truncate">{item.hint}</div>
        </div>
        <span className="font-mono text-[10px] px-2 py-1 rounded border border-border text-bleeb-text group-hover:bg-bleeb-cyan group-hover:text-bleeb-bg group-hover:border-bleeb-cyan transition-colors">
          ↓
        </span>
      </div>
    </a>
  );
}

function Group({ label, accent, items, cols = "md:grid-cols-3 lg:grid-cols-4" }: {
  label: string; accent: string; items: Item[]; cols?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-bleeb-surface-1/60 p-6">
      <div className="font-mono text-[11px] uppercase tracking-wider mb-4" style={{ color: accent }}>
        {label} · {items.length} file{items.length === 1 ? "" : "s"}
      </div>
      <div className={`grid grid-cols-2 ${cols} gap-3`}>
        {items.map((it) => <Card key={it.href} item={it} />)}
      </div>
    </div>
  );
}

export function DistributionKit() {
  return (
    <div className="space-y-8">
      {/* Bundle quick downloads */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {bundles.map((b) => (
          <a
            key={b.href}
            href={b.href}
            download
            className="rounded-md border border-border bg-bleeb-surface-1 p-4 hover:border-bleeb-cyan transition-colors group"
          >
            <div className="font-mono text-[10px] uppercase tracking-wider mb-2" style={{ color: b.accent }}>.zip</div>
            <div className="font-display text-base text-bleeb-text">{b.label}</div>
            <div className="font-mono text-[10px] text-bleeb-muted mt-1">{b.hint}</div>
            <div className="font-mono text-[11px] text-bleeb-cyan mt-3 group-hover:translate-x-0.5 transition-transform">Download ↓</div>
          </a>
        ))}
      </div>

      <Group label="Presentations" accent="var(--bleeb-cyan)"   items={presentations} cols="md:grid-cols-2" />
      <Group label="Documents"     accent="var(--bleeb-amber)"  items={documents}     cols="md:grid-cols-2" />
      <Group label="Email"         accent="var(--bleeb-blue)"   items={emails}        cols="md:grid-cols-3" />
      <Group label="LinkedIn"      accent="#0A66C2"             items={linkedin} />
      <Group label="Instagram"     accent="#E4405F"             items={instagram} />
      <Group label="TikTok"        accent="#FF0050"             items={tiktok}        cols="md:grid-cols-3" />
      <Group label="X.com"         accent="var(--bleeb-text)"   items={xcom} />
      <Group label="GitHub"        accent="var(--bleeb-green)"  items={github} />
    </div>
  );
}
