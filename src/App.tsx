import { ArrowUpRight } from 'lucide-react'

const experience = [
  { role: 'SDE II', company: 'Threasury Media', date: '2026 — Now', href: 'https://www.threasury.com' },
  { role: 'Software Engineer', company: 'Helixo Innovations', date: '2025 — 2026', href: 'https://helixo.co' },
  { role: 'Junior Software Engineer', company: 'Helixo Innovations', date: '2023 — 2025', href: 'https://helixo.co' },
  { role: 'Software Engineer', company: 'Ecloto Designs', date: '2023', href: null },
]

const apps = [
  { name: 'UFE Upsell Bundle', rating: 4.9, icon: 'https://cdn.shopify.com/app-store/listing_images/4ae53327b3afd36c9972e851101392c6/icon/CLKHn7X-wvQCEAE=.png', url: 'https://apps.shopify.com/upsell-funnel-engine-upsells' },
  { name: 'BUCKS Currency PRO++', rating: 4.9, icon: 'https://cdn.shopify.com/app-store/listing_images/711119d0bf4a6aaa500abe82a4c593af/icon/CIbBrK6-4pIDEAE=.png', url: 'https://apps.shopify.com/bucks-currency-converter' },
  { name: 'HUE Cart Drawer', rating: 5.0, icon: 'https://cdn.shopify.com/app-store/listing_images/2a82d14ff0908b4b11a67b003ee37313/icon/CK-H2dz2tPsCEAE=.jpeg', url: 'https://apps.shopify.com/hue-cart-drawer-cart-upsell' },
  { name: 'Dinosell Post-Purchase', rating: 4.5, icon: 'https://cdn.shopify.com/app-store/listing_images/eff91c293f78584414290154ecb51120/icon/CIH-oZGrlPACEAE=.png', url: 'https://apps.shopify.com/dinosell-post-purchase-upsell-widgets' },
  { name: 'HUE Free Gifts', rating: 4.6, icon: 'https://cdn.shopify.com/app-store/listing_images/3e809f875c8c7f4975e920b662d791aa/icon/CPzrxdeCnZMDEAE=.png', url: 'https://apps.shopify.com/free-gift-upsell' },
  { name: 'ShopSTR Bookings', rating: 3.4, icon: 'https://cdn.shopify.com/app-store/listing_images/65185eb83d87cabb6b113181e4878679/icon/CI2T8N3Q4oADEAE=.png', url: 'https://apps.shopify.com/shopbnb' },
]

const skills = {
  Frontend: ['React', 'Next.js', 'Remix', 'TypeScript', 'Tailwind'],
  Backend: ['Node.js', 'Express', 'MongoDB', 'GraphQL'],
  Shopify: ['Liquid', 'Hydrogen', 'Polaris'],
  DevOps: ['Docker', 'DigitalOcean', 'Git'],
}

const projects = [
  { name: 'kerala-job-alert-bot', desc: 'Telegram bot for Kerala job listings', url: 'https://github.com/newwohh/kerala-job-alert-bot' },
  { name: 'env-safe', desc: 'Zero-dep env var validator for Node', url: 'https://github.com/newwohh/env-safe' },
]

function SectionLabel({ num, name, delay = 0 }: { num: string; name: string; delay?: number }) {
  return (
    <div className="flex items-center gap-3 pb-1.5 border-b border-[var(--color-line)] rise" style={{ animationDelay: `${delay}ms` }}>
      <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-accent)]">№{num}</span>
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-muted)]">{name}</span>
    </div>
  )
}

export default function App() {
  return (
    <div className="editorial-root min-h-screen w-full bg-[var(--color-bg)] text-[var(--color-ink)]">
      <div className="editorial-shell w-full max-w-[1600px] mx-auto flex flex-col px-5 sm:px-6 md:px-10 py-5 gap-6">

        {/* Top meta strip */}
        <div className="flex items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--color-muted)] pb-3 border-b border-[var(--color-line)] rise">
          <span className="truncate">Folio №01 — <span className="text-[var(--color-ink)]">Nevin Raju</span></span>
          <span className="hidden lg:inline">Vol. 2026 / Issue 04 / Kollam · IN</span>
          <span className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span className="hidden sm:inline">Available for work</span>
            <span className="sm:hidden">Available</span>
          </span>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-12 gap-y-6 sm:gap-y-8 gap-x-6 md:gap-x-10 items-end">
          <div className="col-span-12 md:col-span-8 rise" style={{ animationDelay: '60ms' }}>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-muted)] mb-4">
              ◆ Software Engineer — Shopify Specialist
            </div>
            <h1 className="font-display font-light leading-[0.82] tracking-[-0.03em] text-[clamp(3.25rem,16vw,8rem)] md:text-[clamp(4rem,9vw,8rem)]">
              Nevin{' '}
              <span className="italic font-normal text-[var(--color-accent)]" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
                Raju
              </span>
              <span className="text-[var(--color-accent)]">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)]">
              Full-stack developer on the Shopify ecosystem — Liquid, Hydrogen, Remix, Polaris. SDE II at{' '}
              <a href="https://www.threasury.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-ink)] underline decoration-[var(--color-line)] underline-offset-4 hover:decoration-[var(--color-accent)]">
                Threasury Media
              </a>
              .
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 rise" style={{ animationDelay: '200ms' }}>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-muted)] mb-4 flex items-center gap-2">
              <span className="w-5 h-px bg-[var(--color-accent)]" />
              Currently / Apr '26
            </div>
            <div className="space-y-4">
              {[
                { k: 'Building', v: 'digital products at Threasury Media', t: 'SDE II' },
                { k: 'Learning', v: 'AI & prompt engineering for commerce', t: 'self-study' },
                { k: 'Tinkering', v: 'env-safe, kerala-job-alert-bot', t: 'open src' },
              ].map((item, i) => (
                <div key={i} className="border-b border-dashed border-[var(--color-line)] pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">— {item.k}</span>
                    <span className="font-mono text-[10px] text-[var(--color-muted)]">{item.t}</span>
                  </div>
                  <div className="font-display italic text-[18px] leading-snug" style={{ fontVariationSettings: '"SOFT" 50' }}>
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body — middle row with 3 columns */}
        <div className="editorial-mid grid grid-cols-12 gap-y-8 gap-x-6 md:gap-10">
          {/* Experience */}
          <div className="col-span-12 md:col-span-4 flex flex-col lg:min-h-0 rise" style={{ animationDelay: '280ms' }}>
            <SectionLabel num="01" name="Experience" />
            <ul className="mt-3 space-y-1.5">
              {experience.map((e, i) => (
                <li key={i} className="group flex items-baseline justify-between gap-3 pb-2 border-b border-dashed border-[var(--color-line)] last:border-0">
                  <div className="min-w-0">
                    <div className="text-[14px] font-medium leading-tight truncate">
                      {e.role}
                      {e.href ? (
                        <> · <a href={e.href} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">{e.company}</a></>
                      ) : (
                        <span className="text-[var(--color-muted)]"> · {e.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="font-mono text-[11px] text-[var(--color-muted)] whitespace-nowrap tabular-nums">{e.date}</div>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-[var(--color-accent)]" />
                What I Built
              </div>
              <ul className="space-y-1 text-[13px] leading-snug text-[var(--color-ink)]">
                <li className="flex gap-2"><span className="text-[var(--color-accent)] shrink-0">→</span> Migrated draft orders <span className="font-mono">REST → GraphQL</span> in Express.js</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] shrink-0">→</span> Wired Shopify Metafields into Express · cut load <span className="font-mono">~20%</span></li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] shrink-0">→</span> Rewrote a legacy Shopify app in Remix · <span className="font-mono">LCP &lt; 2s</span></li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] shrink-0">→</span> Translated Figma → production UI in Preact</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] shrink-0">→</span> Shipped Next.js premium features &amp; pricing plans</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] shrink-0">→</span> Built MongoDB workflows for merchant campaigns</li>
                <li className="flex gap-2"><span className="text-[var(--color-accent)] shrink-0">→</span> Deployed <span className="font-mono">5+</span> apps on Docker &amp; DigitalOcean</li>
              </ul>
            </div>
          </div>

          {/* Shopify Apps */}
          <div className="col-span-12 md:col-span-5 flex flex-col lg:min-h-0 rise" style={{ animationDelay: '360ms' }}>
            <SectionLabel num="02" name="Shopify Apps — Contributed to" />
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 content-start">
              {apps.map((a, i) => (
                <a
                  key={a.name}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 py-1"
                >
                  <span className="font-mono text-[10px] text-[var(--color-muted)] tabular-nums">0{i + 1}</span>
                  <img src={a.icon} alt="" width={32} height={32} className="rounded-md shrink-0 ring-1 ring-[var(--color-line)]" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px] font-medium leading-tight truncate group-hover:text-[var(--color-accent)] transition-colors">
                      {a.name}
                    </div>
                    <div className="font-mono text-[10px] text-[var(--color-muted)]">★ {a.rating}</div>
                  </div>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-accent)] shrink-0" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--color-line)]">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-[var(--color-accent)]" />
                My Work Across These Apps
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] leading-snug">
                <span className="flex gap-1.5"><span className="text-[var(--color-accent)]">·</span> Remix rewrites &amp; perf</span>
                <span className="flex gap-1.5"><span className="text-[var(--color-accent)]">·</span> REST → GraphQL migrations</span>
                <span className="flex gap-1.5"><span className="text-[var(--color-accent)]">·</span> Figma → Preact UI builds</span>
                <span className="flex gap-1.5"><span className="text-[var(--color-accent)]">·</span> Next.js premium features</span>
                <span className="flex gap-1.5"><span className="text-[var(--color-accent)]">·</span> Metafields API wiring</span>
                <span className="flex gap-1.5"><span className="text-[var(--color-accent)]">·</span> Docker / DigitalOcean deploys</span>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                <span>— Helixo · Ecloto</span>
                <div className="flex gap-3">
                  <a href="https://helixo.co" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">Helixo ↗</a>
                  <a href="https://apps.shopify.com/partners/helixo-co" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">Store ↗</a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="col-span-12 md:col-span-3 flex flex-col lg:min-h-0 rise" style={{ animationDelay: '440ms' }}>
            <SectionLabel num="03" name="Stack" />
            <div className="mt-3 space-y-3">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-1">— {group}</div>
                  <div className="text-[14px] leading-snug">
                    {items.map((s, i) => (
                      <span key={s}>
                        {s}
                        {i < items.length - 1 && <span className="text-[var(--color-muted)] mx-1">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-1">— Languages</div>
                <div className="text-[14px] leading-snug">
                  TypeScript<span className="text-[var(--color-muted)] mx-1">·</span>JavaScript<span className="text-[var(--color-muted)] mx-1">·</span>HTML<span className="text-[var(--color-muted)] mx-1">·</span>CSS<span className="text-[var(--color-muted)] mx-1">·</span>Liquid
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--color-line)]">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2 flex items-center gap-2">
                <span className="w-3 h-px bg-[var(--color-accent)]" />
                AI Co-pilots
              </div>
              <div className="text-[14px] leading-relaxed">
                Claude
                <span className="text-[var(--color-muted)] mx-1">·</span>
                Codex
                <span className="text-[var(--color-muted)] mx-1">·</span>
                Antigravity
                <span className="text-[var(--color-muted)] mx-1">·</span>
                Windsurf
                <span className="text-[var(--color-muted)] mx-1">·</span>
                Gemini
              </div>
              <p className="mt-2 text-[11px] text-[var(--color-muted)] italic leading-snug">
                Paired daily across planning, shipping, and review.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="editorial-bottom grid grid-cols-12 gap-y-8 gap-x-6 md:gap-10 pt-5 border-t border-[var(--color-line)]">
          {/* Open Source */}
          <div className="col-span-12 md:col-span-4 rise" style={{ animationDelay: '520ms' }}>
            <SectionLabel num="04" name="Open Source" />
            <div className="mt-3 grid grid-cols-2 gap-4">
              {projects.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="font-mono text-[13px] font-medium flex items-center gap-1 group-hover:text-[var(--color-accent)] transition-colors">
                    ▸ {p.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="text-[12px] text-[var(--color-muted)] leading-snug mt-1">{p.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="col-span-12 md:col-span-4 rise" style={{ animationDelay: '580ms' }}>
            <SectionLabel num="05" name="Education" />
            <div className="mt-3 grid grid-cols-2 gap-4 text-[13px]">
              <div>
                <div className="font-medium leading-tight">Bangalore University</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] mt-1">BBM · 2018–2021</div>
              </div>
              <div>
                <div className="font-medium leading-tight">Entri Elevate</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] mt-1">MERN · 2022–2023</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-12 md:col-span-4 rise" style={{ animationDelay: '640ms' }}>
            <SectionLabel num="06" name="Contact" />
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 font-mono text-[12px]">
              <a href="mailto:hellonevo13@gmail.com" className="hover:text-[var(--color-accent)] truncate">@ hellonevo13@gmail.com</a>
              <a href="tel:+918921231740" className="hover:text-[var(--color-accent)]">☎ +91 89212 31740</a>
              <a href="https://github.com/newwohh" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">GH / newwohh ↗</a>
              <a href="https://www.linkedin.com/in/nevinraju" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)]">IN / nevinraju ↗</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
