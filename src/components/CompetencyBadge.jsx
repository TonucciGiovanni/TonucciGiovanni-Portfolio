export function CompetencyBadge({ title, items }) {
  return (
    <div className="p-6 border border-accent/20 rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all">
      <h3 className="font-syne font-semibold text-accent mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="text-text-secondary text-sm flex items-start">
            <span className="text-accent mr-2 flex-shrink-0">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
