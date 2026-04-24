import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'kerala-job-alert-bot',
    description: 'A Telegram bot that sends Kerala PSC and private job updates to users based on their selected skills and job interests.',
    tech: ['TypeScript', 'Telegram Bot API'],
    url: 'https://github.com/newwohh/kerala-job-alert-bot',
    active: true,
  },
  {
    name: 'env-safe',
    description: 'A tiny, dependency-free utility for Node.js that guarantees required environment variables exist before your app runs.',
    tech: ['TypeScript', 'npm package'],
    url: 'https://github.com/newwohh/env-safe',
    active: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-2">
      <h2 className="text-xl font-semibold mb-2">Open Source &amp; Side Projects</h2>
      <p className="text-[var(--color-text-muted)] text-sm mb-8">
        Actively maintained projects from the past year
      </p>

      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-accent)] transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Github size={16} className="text-[var(--color-text-muted)]" />
              <h3 className="font-mono font-medium text-sm group-hover:text-[var(--color-accent)] transition-colors">
                {project.name}
              </h3>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-text-muted)]" />
              {project.active && (
                <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                  Active
                </span>
              )}
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-medium px-2 py-0.5 rounded bg-[var(--color-surface-alt)] text-[var(--color-text-muted)]">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
