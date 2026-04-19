export default function Experience() {
  return (
    <section id="experience" className="py-14">
      <h2 className="text-xl font-semibold mb-8">Experience</h2>
      <div className="space-y-10">

        {/* Threasury */}
        <article>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-semibold text-base">
              Software Engineer 2 (SDE II) —{' '}
              <a href="https://www.threasury.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                Threasury Media
              </a>
            </h3>
            <span className="text-sm text-[var(--color-text-muted)] mt-0.5 sm:mt-0">Mar 2026 — Present</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">Sofia</p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Building impactful digital products at a company that consolidates advertising technology,
            brands, and consumer businesses globally. Applying full-stack development expertise and
            scalable application design to deliver web solutions across the digital ecosystem.
          </p>
        </article>

        {/* Helixo — SE */}
        <article>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-semibold text-base">
              Software Engineer —{' '}
              <a href="https://helixo.co" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                Helixo Innovations Pvt Ltd
              </a>
            </h3>
            <span className="text-sm text-[var(--color-text-muted)] mt-0.5 sm:mt-0">Jul 2025 — Mar 2026</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">Kochi, Kerala</p>
          <ul className="space-y-2 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Contributed to 5+ Shopify apps, enhancing performance, scalability, and merchant adoption.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Revamped a legacy 5-year-old Shopify app with Remix, reducing LCP to &lt;2s and achieving Built for Shopify certification.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Restored "Built for Shopify" badge for a currency converter app, reclaiming #1 ranking in its category.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Deployed 5+ apps (2 production, 3 staging) with Docker &amp; DigitalOcean.</li>
          </ul>
        </article>

        {/* Helixo — JSE */}
        <article>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-semibold text-base">
              Junior Software Engineer —{' '}
              <a href="https://helixo.co" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">
                Helixo Innovations Pvt Ltd
              </a>
            </h3>
            <span className="text-sm text-[var(--color-text-muted)] mt-0.5 sm:mt-0">Dec 2023 — Jul 2025</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">Kochi, Kerala</p>
          <ul className="space-y-2 text-[var(--color-text-secondary)] leading-relaxed">
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Optimized Wowcart – Slide Cart Drawer by integrating Shopify App Metafields with Express.js, cutting app load time by ~20%.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Migrated draft orders from REST to GraphQL using Express.js, enabling 1M+ draft order requests/month.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Developed premium features &amp; pricing plans with Next.js, adopted by 600+ merchants, driving direct revenue growth.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Translated Figma UI designs into production with Preact, boosting app ratings from 4.2 to 4.9 on the Shopify App Store.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Implemented customer data workflows with MongoDB for targeted merchant campaigns.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Resolved 1,000+ merchant support tickets, maintaining 100% positive feedback.</li>
            <li className="flex gap-2"><span className="text-[var(--color-text-muted)] select-none">—</span> Built product &amp; company websites (ufe.ai, helixo.co) in WordPress, generating 1,000+ monthly visits per site.</li>
          </ul>
        </article>

        {/* Ecloto */}
        <article>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
            <h3 className="font-semibold text-base">
              Software Engineer — Ecloto Designs
            </h3>
            <span className="text-sm text-[var(--color-text-muted)] mt-0.5 sm:mt-0">Nov 2023 — Dec 2023</span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">Kochi, Kerala</p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Worked on Shopify projects as a MERN stack developer, collaborating on e-commerce solutions
            and learning the intricacies of the Shopify ecosystem.
          </p>
        </article>

      </div>
    </section>
  )
}
