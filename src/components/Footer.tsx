export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-[var(--color-text-muted)] border-t border-[var(--color-border)]">
      <p>&copy; {new Date().getFullYear()} Nevin Raju. Built with React &amp; TypeScript.</p>
    </footer>
  )
}
