export function LearningCard({
  title,
  description,
  status = 'In Progress',
  progress = 0,
  focus,
  nextStep
}) {
  const isCompleted = status === 'Completed'
  const statusColor = isCompleted ? 'text-green-400' : 'text-accent'
  const progressWidth = `${Math.min(Math.max(progress, 0), 100)}%`

  return (
    <div className="relative pl-12 md:pl-14">
      <div
        className={`absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-dark-bg font-dm-mono text-xs md:h-12 md:w-12 ${
          isCompleted
            ? 'border-green-400 text-green-400'
            : 'border-accent text-accent'
        }`}
        aria-hidden="true"
      >
        {isCompleted ? 'OK' : `${progress}%`}
      </div>

      <article className="rounded-lg border border-accent/20 p-5 transition-all hover:border-accent/50 hover:bg-accent/5 sm:p-6">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-syne font-semibold text-lg mb-2">{title}</h3>
            <p className="text-text-secondary text-sm">{description}</p>
          </div>
          <div className="flex items-center gap-2 sm:justify-end">
            <span className={`h-2 w-2 rounded-full ${isCompleted ? 'bg-green-400' : 'bg-accent animate-pulse-dot'}`}></span>
            <span className={`font-dm-mono text-xs uppercase tracking-wider ${statusColor}`}>{status}</span>
          </div>
        </div>

        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-dm-mono text-xs uppercase tracking-wider text-text-muted">Progress</span>
            <span className="font-dm-mono text-xs text-accent">{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded bg-text-muted/20">
            <div
              className={`h-full rounded ${isCompleted ? 'bg-green-400' : 'bg-accent'}`}
              style={{ width: progressWidth }}
            ></div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {focus && (
            <div>
              <p className="font-dm-mono text-xs uppercase tracking-wider text-text-muted mb-1">Current Focus</p>
              <p className="text-sm text-text-secondary">{focus}</p>
            </div>
          )}
          {nextStep && (
            <div>
              <p className="font-dm-mono text-xs uppercase tracking-wider text-text-muted mb-1">Next Step</p>
              <p className="text-sm text-text-secondary">{nextStep}</p>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
