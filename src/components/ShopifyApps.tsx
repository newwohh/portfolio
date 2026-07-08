import { Star, ExternalLink } from 'lucide-react'

const apps = [
  {
    name: 'UFE Cross Sell & Upsell Bundle',
    description: 'Boost sales with BOGO, volume discounts and cart upsell offers. Serving 6,000+ merchants with 500M+ monthly requests.',
    rating: 4.8,
    reviews: 494,
    icon: 'https://cdn.shopify.com/app-store/listing_images/4ae53327b3afd36c9972e851101392c6/icon/CLKHn7X-wvQCEAE=.png',
    url: 'https://apps.shopify.com/upsell-funnel-engine-upsells',
    badge: 'Built for Shopify',
  },
  {
    name: 'BUCKS Currency Converter PRO++',
    description: 'Unlimited multi-currency switcher with geolocation detection and AI analytics. #1 ranked in its category.',
    rating: 4.9,
    reviews: 1146,
    icon: 'https://cdn.shopify.com/app-store/listing_images/711119d0bf4a6aaa500abe82a4c593af/icon/CIbBrK6-4pIDEAE=.png',
    url: 'https://apps.shopify.com/bucks-currency-converter',
    badge: 'Built for Shopify',
  },
  {
    name: 'HUE Cart Drawer',
    description: 'Cart drawer with discount code support, cart upsells, and optimized load performance.',
    rating: 4.9,
    reviews: 41,
    icon: 'https://cdn.shopify.com/app-store/listing_images/2a82d14ff0908b4b11a67b003ee37313/icon/CK-H2dz2tPsCEAE=.jpeg',
    url: 'https://apps.shopify.com/hue-cart-drawer-cart-upsell',
    badge: 'Built for Shopify',
  },
  {
    name: 'Dinosell: Post Purchase Upsell',
    description: 'Boost AOV with post-purchase upsells, drag-and-drop thank you page builder, and one-click checkout upsells.',
    rating: 4.5,
    reviews: 12,
    icon: 'https://cdn.shopify.com/app-store/listing_images/eff91c293f78584414290154ecb51120/icon/CIH-oZGrlPACEAE=.png',
    url: 'https://apps.shopify.com/dinosell-post-purchase-upsell-widgets',
    badge: null,
  },
  {
    name: 'HUE Free Gifts Upsell',
    description: 'Free gift with purchase and BOGO for product and cart upsells.',
    rating: 4.7,
    reviews: 33,
    icon: 'https://cdn.shopify.com/app-store/listing_images/3e809f875c8c7f4975e920b662d791aa/icon/CPzrxdeCnZMDEAE=.png',
    url: 'https://apps.shopify.com/free-gift-upsell',
    badge: 'Built for Shopify',
  },
]

export default function ShopifyApps() {
  return (
    <section id="shopify-apps" className="py-2">
      <h2 className="text-xl font-semibold mb-2">Shopify Apps</h2>
      <p className="text-[var(--color-text-muted)] text-sm mb-8">
        Apps I contributed to, serving 36,000+ merchants globally
      </p>
      <h3 className="text-base font-semibold mb-4">At Helixo</h3>

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

      <h3 className="text-base font-semibold mt-10 mb-2">At Ecloto Designs</h3>
      <p className="text-[var(--color-text-muted)] text-sm mb-4">App I contributed to at Ecloto</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="https://apps.shopify.com/shopbnb"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-accent)] transition-colors"
        >
          <div className="flex items-start gap-4 mb-3">
            <img
              src="https://cdn.shopify.com/app-store/listing_images/65185eb83d87cabb6b113181e4878679/icon/CI2T8N3Q4oADEAE=.png"
              alt="ShopSTR icon"
              width={48}
              height={48}
              className="rounded-lg shrink-0"
            />
            <div className="min-w-0">
              <h4 className="font-medium text-sm leading-tight group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                ShopSTR — Book Everything
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center gap-0.5 text-xs text-amber-600">
                  <Star size={11} fill="currentColor" />
                  3.7
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">11 reviews</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Booking platform for rentals, hotels, and experiences with iCal sync, flexible pricing, and integrations with Airbnb, Booking.com, and VRBO.
          </p>
        </a>
      </div>

      <h3 className="text-base font-semibold mt-10 mb-4">Websites I Built</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="https://ufe.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-accent)] transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <img src="https://ufe.ai/wp-content/uploads/2024/11/ufeai_logo-1.png" alt="UFE.ai logo" width={24} height={24} className="rounded" />
            <h4 className="font-medium text-sm group-hover:text-[var(--color-accent)] transition-colors">ufe.ai</h4>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-text-muted)]" />
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Product website for UFE — Upsell Funnel Engine. Generates 1,000+ monthly visits and drives app installs from the Shopify App Store.
          </p>
        </a>
        <a
          href="https://helixo.co"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-accent)] transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <img src="https://helixo.co/wp-content/uploads/2025/01/helixo-logo-blue.svg" alt="Helixo logo" width={24} height={24} className="rounded" />
            <h4 className="font-medium text-sm group-hover:text-[var(--color-accent)] transition-colors">helixo.co</h4>
            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-text-muted)]" />
          </div>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Company website for Helixo Innovations — showcasing their Shopify app suite serving 36,000+ D2C brands globally.
          </p>
        </a>
      </div>
    </section>
  )
}
