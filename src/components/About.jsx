export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-syne text-3xl sm:text-4xl font-semibold mb-8">About</h2>

        <div className="space-y-6 text-text-secondary">
          <p className="text-lg leading-relaxed">
            I'm a customer-focused technical leader with 3+ years of hands-on experience across Dynamics 365, Azure, and the Power Platform. I specialize in bridging frontend engineering, custom backend logic, and production troubleshooting to resolve high-priority incidents and drive operational impact.
          </p>

          <p className="text-lg leading-relaxed">
            As a Technical Resolutions Lead, I own end-to-end incident management across complex enterprise platforms, coordinate escalation pipelines, and ensure root-cause analysis and service recovery within SLAs. I'm equally comfortable writing TypeScript frontends, developing C# plugins, and optimizing cloud infrastructure.
          </p>

          <div className="mt-8 p-6 border-l-4 border-accent bg-accent/5 rounded">
            <p className="text-lg font-semibold text-accent">
              60% Azure Cost Reduction
            </p>
            <p className="text-text-secondary">
              Optimized cloud infrastructure from $3,900 to $1,500/month while maintaining 100% platform availability.
            </p>
          </div>

          <p className="text-base">
            Open to remote and international opportunities. I'm actively expanding into Full-Stack Development and DevOps engineering through structured learning paths.
          </p>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap gap-4 sm:gap-6">
          <a href="mailto:tonuciigiovanni@gmail.com" className="text-accent hover:underline flex items-center gap-2">
            <span className="text-text-muted">→</span> Email
          </a>
          <a href="https://www.linkedin.com/in/tonucci-giovanni-94127b300/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
            <span className="text-text-muted">→</span> LinkedIn
          </a>
          <a href="https://github.com/TonucciGiovanni" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
            <span className="text-text-muted">→</span> GitHub
          </a>
          <a href="https://drive.google.com/file/d/1zqWaZQ7unVhoXSuo-uSbtxwpuem-m2tK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-2">
            <span className="text-text-muted">→</span> View / Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
