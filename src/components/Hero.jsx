export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-12 py-32">
      <div className="max-w-4xl w-full">
        {/* Remote Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="font-dm-mono text-xs uppercase tracking-widest text-accent">
            Available for Remote Work
          </span>
        </div>

        {/* Hero Tag */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-px bg-accent"></div>
          <span className="font-dm-mono text-xs uppercase tracking-widest text-accent">
            Technical Team Lead · Power Platform · Full-Stack Developer · DevOps Engineer
          </span>
        </div>

        {/* Hero Name */}
        <h1 className="font-syne font-extrabold mb-2" style={{ fontSize: 'clamp(56px, 8vw, 100px)', lineHeight: 0.92, letterSpacing: 0 }}>
          Giovanni<br />
          <span style={{
            WebkitTextStroke: '1px rgba(200, 240, 96, 0.85)',
            color: '#e8e6e0',
            display: 'block'
          }}>
            Tonucci
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-dm-mono text-xs uppercase tracking-wider text-text-secondary mb-8" style={{ marginTop: '28px' }}>
          Nairobi, Kenya · Open to Remote & International Opportunities
        </p>

        {/* Tagline */}
        <p className="text-lg font-light text-text-secondary max-w-2xl mb-12" style={{
          borderLeft: '2px solid #c8f060',
          paddingLeft: '20px',
          lineHeight: 1.7
        }}>
          <strong style={{ color: '#e8e6e0', fontWeight: 500 }}>
            I build enterprise systems that survive the real world.
          </strong>
          <br />
          Leading technical resolutions, owning escalation pipelines, and delivering measurable infrastructure impact across Dynamics 365, Azure, and Power Platform.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="#projects"
            className="font-dm-mono text-xs uppercase tracking-widest px-7 py-3.5 bg-accent text-dark-bg font-medium rounded transition-all hover:bg-accent-dark hover:-translate-y-0.5"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="font-dm-mono text-xs uppercase tracking-widest px-7 py-3.5 border border-gray-700 text-text-secondary rounded transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/tonucci-giovanni-94127b300/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-mono text-xs uppercase tracking-widest px-7 py-3.5 border border-gray-700 text-text-secondary rounded transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-0 border-t border-b border-gray-800 py-8">
          <div className="text-center border-r border-gray-800 px-4">
            <div className="font-syne text-4xl font-extrabold text-accent mb-1" style={{ letterSpacing: '-0.02em' }}>60%</div>
            <div className="font-dm-mono text-xs uppercase tracking-widest text-gray-600">Azure Cost Reduction</div>
          </div>
          <div className="text-center border-r border-gray-800 px-4">
            <div className="font-syne text-4xl font-extrabold text-accent mb-1" style={{ letterSpacing: '-0.02em' }}>3+</div>
            <div className="font-dm-mono text-xs uppercase tracking-widest text-gray-600">Years Experience</div>
          </div>
          <div className="text-center border-r border-gray-800 px-4">
            <div className="font-syne text-4xl font-extrabold text-accent mb-1" style={{ letterSpacing: '-0.02em' }}>2</div>
            <div className="font-dm-mono text-xs uppercase tracking-widest text-gray-600">Live Platforms</div>
          </div>
          <div className="text-center px-4">
            <div className="font-syne text-4xl font-extrabold text-accent mb-1" style={{ letterSpacing: '-0.02em' }}>100%</div>
            <div className="font-dm-mono text-xs uppercase tracking-widest text-gray-600">Platform Availability</div>
          </div>
        </div>
      </div>
    </section>
  )
}
