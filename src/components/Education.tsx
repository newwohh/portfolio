import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-14">
      <h2 className="text-xl font-semibold mb-8">Education</h2>
      <div className="space-y-6">
        <article className="flex gap-4">
          <GraduationCap size={20} className="text-[var(--color-text-muted)] mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium text-base">Bangalore University</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Bachelor of Business Management (BBM) — Business Administration &amp; Management
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mt-0.5">2018 — 2021</p>
          </div>
        </article>
        <article className="flex gap-4">
          <GraduationCap size={20} className="text-[var(--color-text-muted)] mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium text-base">Entri Elevate</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Full Stack Developer — MERN Stack (React, Node.js, Express.js, MongoDB)
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mt-0.5">Oct 2022 — Nov 2023</p>
          </div>
        </article>
      </div>
    </section>
  )
}
