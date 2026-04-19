import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Nevin Raju</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">
          SDE II at Threasury Media &middot; Full-Stack Developer &middot; Shopify Expert
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-text-secondary)]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> Kollam, Kerala, India
          </span>
          <a href="mailto:hellonevo13@gmail.com" className="inline-flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors">
            <Mail size={14} /> hellonevo13@gmail.com
          </a>
          <a href="tel:+918921231740" className="inline-flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors">
            <Phone size={14} /> +91 8921231740
          </a>
          <a href="https://github.com/newwohh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors">
            <Github size={14} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/nevinraju" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors">
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
