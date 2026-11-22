import Badge from './Badge';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignmentClass =
    align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl';

  return (
    <div className={`space-y-3 ${alignmentClass} ${className}`}>
      {eyebrow && (
        <div>
          <Badge tone="accent">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-primary">{title}</h2>
      {subtitle && (
        <p className="text-muted text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}