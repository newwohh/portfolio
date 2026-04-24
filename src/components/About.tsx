import BalancedText from './BalancedText'

export default function About() {
  return (
    <section id="about" className="py-2">
      <h2 className="text-xl font-semibold mb-4">About</h2>
      <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
        <BalancedText>
          Full-stack developer with 2+ years of professional experience building scalable
          e-commerce applications. I specialize in the MERN stack, Shopify ecosystem (Liquid,
          Hydrogen, Remix, Polaris), and modern web technologies. I've contributed to Shopify
          apps serving 36,000+ merchants and processing over 500M monthly requests.
        </BalancedText>
        <BalancedText>
          Currently at Threasury Media as SDE II, building digital products. Previously at
          Helixo Innovations where I maintained 100% customer satisfaction across 1,000+ support
          tickets, improved app ratings from 4.2 to 4.9, and helped achieve "Built for Shopify"
          certification for multiple apps.
        </BalancedText>
        <BalancedText>
          Self-taught developer based in Kerala. I'm currently expanding into AI — learning prompt
          engineering and exploring ways to integrate AI into e-commerce workflows for smarter,
          more personalized shopping experiences.
        </BalancedText>
      </div>
    </section>
  )
}
