import { LearningCard } from './LearningCard'

export function CurrentlyLearning() {
  const learningPaths = [
    {
      title: 'Full-Stack Development',
      description: 'React, Node.js, databases, and system design via roadmap.sh',
      status: 'In Progress',
      progress: 55,
      focus: 'Building stronger React architecture and backend fundamentals',
      nextStep: 'API design, database modeling, and deployment workflows'
    },
    {
      title: 'DevOps Engineering',
      description: 'Docker, Kubernetes, CI/CD pipelines, infrastructure as code via roadmap.sh',
      status: 'In Progress',
      progress: 45,
      focus: 'Practicing containerization, CI/CD patterns, and cloud delivery',
      nextStep: 'Kubernetes fundamentals and infrastructure as code'
    },
    {
      title: 'Microsoft Power Platform Developer (PL-400)',
      description: 'Advanced certification via Microsoft Learn',
      status: 'In Progress',
      progress: 70,
      focus: 'Deepening Dataverse, Power Apps, and extensibility knowledge',
      nextStep: 'Custom connectors, plugins, and exam preparation'
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      description: 'Cloud fundamentals certification via Microsoft Learn',
      status: 'In Progress',
      progress: 35,
      focus: 'Strengthening Azure services, governance, and pricing concepts',
      nextStep: 'Identity, networking, and practice assessment review'
    },
    {
      title: 'Microsoft Power Platform Fundamentals (PL-900)',
      description: 'Platform fundamentals certification via Microsoft Learn',
      status: 'Completed',
      progress: 100,
      focus: 'Completed foundational Power Platform learning path',
      nextStep: 'Applying concepts through PL-400 and real project delivery'
    }
  ]

  const completedCount = learningPaths.filter((path) => path.status === 'Completed').length
  const averageProgress = Math.round(
    learningPaths.reduce((total, path) => total + path.progress, 0) / learningPaths.length
  )

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 scroll-fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-syne text-3xl sm:text-4xl font-semibold mb-4">Always Building</h2>
            <p className="max-w-2xl text-text-secondary">
              Actively expanding into Full-Stack Development, DevOps engineering, and Microsoft certification paths through structured milestones.
            </p>
          </div>

          <div className="w-full rounded-lg border border-accent/20 p-5 md:max-w-xs">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-dm-mono text-xs uppercase tracking-wider text-text-muted">Overall Progress</span>
              <span className="font-syne text-2xl font-semibold text-accent">{averageProgress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded bg-text-muted/20">
              <div className="h-full rounded bg-accent" style={{ width: `${averageProgress}%` }}></div>
            </div>
            <p className="mt-3 font-dm-mono text-xs uppercase tracking-wider text-text-secondary">
              {completedCount} completed / {learningPaths.length} active tracks
            </p>
          </div>
        </div>

        <div className="relative space-y-5 before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:bg-accent/20 md:before:left-6">
          {learningPaths.map((path, idx) => (
            <LearningCard key={idx} {...path} />
          ))}
        </div>
      </div>
    </section>
  )
}
