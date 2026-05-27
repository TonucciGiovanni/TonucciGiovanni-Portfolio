export function Footer() {
  return (
    <footer className="border-t border-accent/10 py-12 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-text-secondary text-sm font-dm-sans">
            © 2026 Giovanni Tonucci · Built with intent.
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/tonucci-giovanni-94127b300/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <span className="text-sm font-dm-mono">LinkedIn</span>
            </a>
            <a
              href="https://github.com/TonucciGiovanni"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <span className="text-sm font-dm-mono">GitHub</span>
            </a>
            <a
              href="mailto:tonuciigiovanni@gmail.com"
              aria-label="Email"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <span className="text-sm font-dm-mono">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
