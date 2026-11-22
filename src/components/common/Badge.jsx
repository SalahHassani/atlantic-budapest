const BADGE_STYLES = {
  default: 'bg-secondary text-primary border-border',
  accent: 'bg-[#16A6A1]/12 text-[#0D6E6A] border-[#16A6A1]/30',
  neutral: 'bg-background text-muted border-border',
};

export default function Badge({ children, tone = 'default', className = '' }) {
  const toneClass = BADGE_STYLES[tone] || BADGE_STYLES.default;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full border ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}