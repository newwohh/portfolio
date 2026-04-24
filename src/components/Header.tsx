import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

export default function Header() {
  return (
    <aside className="md:border-r md:border-[var(--color-border)] md:pr-8 md:h-full md:flex md:flex-col md:justify-center shrink-0">
      <h1 className="text-3xl font-bold tracking-tight mb-1">Nevin Raju</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-5 leading-snug">
        SDE II at Threasury Media &middot; Full-Stack Developer &middot; Shopify Expert
      </p>

      <div className="flex flex-col gap-2 text-sm text-[var(--color-text-secondary)]">
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

      <p className="hidden md:block mt-6 text-xs text-[var(--color-text-muted)]">
        &copy; {new Date().getFullYear()} Nevin Raju
      </p>
    </aside>
  )
}
