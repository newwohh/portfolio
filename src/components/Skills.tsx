const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Preact', 'Remix', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    label: 'Shopify',
    skills: ['Liquid', 'Hydrogen', 'Polaris', 'Shopify APIs', 'App Development'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Docker', 'DigitalOcean', 'Git', 'WordPress'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-2">
      <h2 className="text-xl font-semibold mb-8">Skills</h2>
      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-[var(--color-text-muted)] mb-2">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-md border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
