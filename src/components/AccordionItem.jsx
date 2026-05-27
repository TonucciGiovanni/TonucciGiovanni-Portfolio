export function AccordionItem({ title, subtitle, children, isOpen, onClick }) {
  return (
    <div className="border-b border-text-muted/20">
      <button
        onClick={onClick}
        className="w-full py-6 px-4 flex justify-between items-start hover:bg-white/5 transition-colors text-left"
      >
        <div className="flex-1">
          <h4 className="font-syne text-lg font-semibold text-text-primary">{title}</h4>
          {subtitle && (
            <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
          )}
        </div>
        <div className="text-accent text-2xl ml-4 flex-shrink-0">
          {isOpen ? '−' : '+'}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-6 animate-slide-down">
          {children}
        </div>
      )}
    </div>
  )
}
