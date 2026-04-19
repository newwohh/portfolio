import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import ShopifyApps from './components/ShopifyApps'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-surface)]">
      <Header />
      <main className="max-w-3xl mx-auto px-6 divide-y divide-[var(--color-border)]">
        <About />
        <Experience />
        <ShopifyApps />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
