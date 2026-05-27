export function StatCard({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-accent font-syne font-bold text-xl mb-1">{value}</div>
      <div className="text-text-secondary text-xs font-dm-mono uppercase tracking-wider">{label}</div>
    </div>
  )
}
