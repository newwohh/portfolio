import { Star, ExternalLink } from 'lucide-react'

const apps = [
  {
    name: 'UFE Cross Sell & Upsell Bundle',
    description: 'Boost sales with BOGO, volume discounts and cart upsell offers. Serving 6,000+ merchants with 500M+ monthly requests.',
    rating: 4.8,
    reviews: 492,
    icon: 'https://cdn.shopify.com/app-store/listing_images/4ae53327b3afd36c9972e851101392c6/icon/CLKHn7X-wvQCEAE=.png',
    url: 'https://apps.shopify.com/upsell-funnel-engine-upsells',
    badge: 'Built for Shopify',
  },
  {
    name: 'BUCKS Currency Converter PRO++',
    description: 'Unlimited multi-currency switcher with geolocation detection and AI analytics. #1 ranked in its category.',
    rating: 4.9,
    reviews: 972,
    icon: 'https://cdn.shopify.com/app-store/listing_images/711119d0bf4a6aaa500abe82a4c593af/icon/CIbBrK6-4pIDEAE=.png',
    url: 'https://apps.shopify.com/partners/helixo-co',
    badge: 'Built for Shopify',
  },
  {
    name: 'Wowcart — Slide Cart Drawer',
    description: 'Cart drawer with discount code support, cart upsells, and optimized load performance.',
    rating: 5.0,
    reviews: 40,
    icon: 'https://cdn.shopify.com/app-store/listing_images/2a82d14ff0908b4b11a67b003ee37313/icon/CK-H2dz2tPsCEAE=.jpeg',
    url: 'https://apps.shopify.com/partners/helixo-co',
    badge: 'Built for Shopify',
  },
  {
    name: 'HUE Free Gifts Upsell',
    description: 'Free gift with purchase and BOGO for product and cart upsells.',
    rating: 4.5,
    reviews: 26,
    icon: 'https://cdn.shopify.com/app-store/listing_images/3e809f875c8c7f4975e920b662d791aa/icon/CPzrxdeCnZMDEAE=.png',
    url: 'https://apps.shopify.com/partners/helixo-co',
    badge: 'Built for Shopify',
  },
]

export default function ShopifyApps() {
  return (
    <section id="shopify-apps" className="py-14">
      <h2 className="text-xl font-semibold mb-2">Shopify Apps</h2>
      <p className="text-[var(--color-text-muted)] text-sm mb-8">
        Apps I contributed to at Helixo, serving 36,000+ merchants globally
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-accent)] transition-colors"
          >
            <div className="flex items-start gap-4 mb-3">
              <img
                src={app.icon}
                alt={`${app.name} icon`}
                width={48}
                height={48}
                className="rounded-lg shrink-0"
              />
              <div className="min-w-0">
                <h3 className="font-medium text-sm leading-tight group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  {app.name}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-0.5 text-xs text-amber-600">
                    <Star size={11} fill="currentColor" />
                    {app.rating}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {app.reviews} reviews
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{app.description}</p>
            {app.badge && (
              <span className="inline-block mt-3 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                {app.badge}
              </span>
            )}
          </a>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
        <p className="text-sm text-[var(--color-text-muted)] mb-2">Websites I built</p>
        <div className="flex gap-4 text-sm">
          <a href="https://ufe.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline inline-flex items-center gap-1">
            ufe.ai <ExternalLink size={12} />
          </a>
          <a href="https://helixo.co" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline inline-flex items-center gap-1">
            helixo.co <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  )
}
