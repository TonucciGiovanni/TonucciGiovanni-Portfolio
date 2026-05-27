import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

function CaseStudySection({ title, items }) {
  return (
    <section>
      <h4 className="font-dm-mono text-xs uppercase tracking-wider text-accent mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-text-secondary flex items-start">
            <span className="text-accent mr-3 flex-shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function ProjectCard({
  title,
  subtitle,
  description,
  contributions,
  tech,
  liveUrl,
  caseStudy,
  projectType,
  ctaLabel = 'View Live',
  isRestricted = false,
  restrictedLabel = 'Restricted Access'
}) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)

  useEffect(() => {
    if (!caseStudyOpen) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCaseStudyOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [caseStudyOpen])

  const caseStudyModal = caseStudyOpen && caseStudy && createPortal(
    <div
      className="fixed inset-0 z-[60] overflow-y-auto bg-black/85 px-4 py-6 backdrop-blur sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setCaseStudyOpen(false)
        }
      }}
    >
      <div className="mx-auto flex min-h-full w-full max-w-4xl items-center">
        <div className="w-full rounded-lg border border-accent/30 bg-dark-bg shadow-2xl">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-accent/20 bg-dark-bg/95 px-5 py-5 backdrop-blur sm:px-6">
            <div>
              <p className="font-dm-mono text-xs uppercase tracking-widest text-accent mb-2">Case Study</p>
              <h3 id="case-study-title" className="font-syne text-2xl font-semibold text-text-primary">
                {title}
              </h3>
            </div>
            <button
              type="button"
              aria-label="Close case study"
              onClick={() => setCaseStudyOpen(false)}
              className="h-10 w-10 flex flex-shrink-0 items-center justify-center rounded border border-accent/30 text-accent hover:bg-accent hover:text-dark-bg"
            >
              X
            </button>
          </div>

          <div className="px-5 py-6 space-y-8 sm:px-6">
            <p className="text-base text-text-secondary leading-relaxed max-w-3xl">
              {caseStudy.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="border border-accent/20 rounded p-4">
                  <div className="font-syne text-3xl font-extrabold text-accent mb-1">{metric.value}</div>
                  <div className="font-dm-mono text-xs uppercase tracking-wider text-text-muted">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudy.sections.map((section) => (
                <CaseStudySection key={section.title} {...section} />
              ))}
            </div>

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3 font-dm-mono text-xs uppercase tracking-widest text-dark-bg hover:bg-accent-dark"
              >
                View Live Project <span>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )

  return (
    <>
      <div className="h-full border border-accent/20 rounded-lg overflow-hidden hover:border-accent/50 hover:bg-accent/5 transition-all group">
        <div className="flex h-full flex-col p-6">
          <h3 className="font-syne font-semibold text-lg mb-2">{title}</h3>
          {subtitle && (
            <p className="font-dm-mono text-xs uppercase tracking-wider text-accent mb-3">
              {subtitle}
            </p>
          )}
          <p className="text-text-secondary text-sm mb-4">{description}</p>
          {contributions && (
            <div className="mb-4">
              <p className="font-dm-mono text-xs uppercase tracking-wider text-text-muted mb-2">
                Key Contributions
              </p>
              <ul className="space-y-2">
                {contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-text-secondary">
                    <span className="mr-2 text-accent">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, idx) => (
              <span key={idx} className="text-xs font-dm-mono px-2 py-1 bg-accent/10 text-accent rounded">
                {t}
              </span>
            ))}
          </div>
          {projectType && (
            <p className="mb-4 font-dm-mono text-xs uppercase tracking-wider text-text-muted">
              {projectType}
            </p>
          )}
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
            {caseStudy && (
              <button
                type="button"
                onClick={() => setCaseStudyOpen(true)}
                className="text-accent font-dm-mono text-sm hover:underline inline-flex items-center group-hover:gap-2 gap-1 transition-all"
              >
                Case Study <span>→</span>
              </button>
            )}
            {isRestricted ? (
              <span className="inline-flex items-center rounded border border-accent/30 px-3 py-2 font-dm-mono text-xs uppercase tracking-widest text-accent">
                {restrictedLabel}
              </span>
            ) : liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-accent px-3 py-2 font-dm-mono text-xs uppercase tracking-widest text-dark-bg hover:bg-accent-dark hover:opacity-100"
              >
                {ctaLabel} <span>→</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {caseStudyModal}
    </>
  )
}
