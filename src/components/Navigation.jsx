import { useState, useEffect } from 'react'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'competencies', 'experience', 'projects', 'learning', 'contact']
      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#competencies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 border-b ${scrolled ? 'bg-black/85 backdrop-blur border-gray-800' : 'bg-transparent border-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-syne font-bold text-xl text-text-primary hover:text-accent transition-colors">
          GT.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-dm-sans transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 bg-accent text-dark-bg font-dm-sans font-semibold rounded-lg hover:bg-accent-dark transition-colors text-sm"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-accent transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-accent transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-accent transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur border-b border-accent/10 px-4 sm:px-6 py-4 space-y-4 animate-slide-down">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-dm-sans transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-accent'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-2 bg-accent text-dark-bg font-dm-sans font-semibold rounded-lg text-sm w-fit"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
