import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { formatHUF } from '../../utils/formatCurrency';
import Badge from '../common/Badge';
import Button from '../common/Button';

export default function PricingCard({ pkg, isSelected = false, onSelect }) {
  const isFeatured = Boolean(pkg.featured);

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(pkg);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      aria-label={`${pkg.name} — ${formatHUF(pkg.price)}. Click to view details and apply.`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      className={`group relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all cursor-pointer text-left ${
        isFeatured
          ? 'bg-surface border-2 border-primary surface-elevated ring-1 ring-accent/25'
          : 'bg-surface border border-border surface-card hover:border-primary/45'
      } ${isSelected ? 'ring-2 ring-accent' : ''}`}
    >
      {/* Top Accent Bar for Featured Package */}
      {isFeatured && (
        <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-accent" />
      )}

      <div className="space-y-6">
        {/* Package Header & Badge */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <Badge tone={isFeatured ? 'accent' : 'default'}>
              {isFeatured && (
                <Sparkles className="w-3.5 h-3.5 mr-1 inline" aria-hidden="true" />
              )}
              {pkg.badge}
            </Badge>
            <span className="text-xs font-medium text-muted">
              Duration: <strong className="text-primary">{pkg.durationLabel}</strong>
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary">
              {pkg.name}
            </h3>
            <p className="text-sm text-muted mt-1.5 leading-relaxed">
              {pkg.summary}
            </p>
          </div>
        </div>

        {/* Price Block */}
        <div
          className={`rounded-xl p-4 sm:p-5 border ${
            isFeatured
              ? 'bg-primary text-surface border-primary'
              : 'bg-background text-primary border-border'
          }`}
        >
          <div className="flex items-baseline gap-2.5 flex-wrap">
            <span
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                isFeatured ? 'text-surface' : 'text-primary'
              }`}
            >
              {formatHUF(pkg.price)}
            </span>

            {pkg.originalPrice && (
              <span className="text-sm line-through text-secondary/75">
                {formatHUF(pkg.originalPrice)}
              </span>
            )}
          </div>

          <p
            className={`text-xs mt-1.5 ${
              isFeatured ? 'text-secondary/90' : 'text-muted'
            }`}
          >
            {pkg.discountNote
              ? pkg.discountNote
              : 'One-time package fee · Statutory fees separate'}
          </p>
        </div>

        {/* Included Features */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            What&apos;s Included
          </p>
          <ul className="space-y-2.5">
            {pkg.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-primary"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/15 text-accent shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-6 mt-6 border-t border-border space-y-2">
        <Button
          type="button"
          variant={isFeatured ? 'accent' : 'primary'}
          size="lg"
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          {pkg.ctaLabel}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Button>
        <p className="text-center text-xs text-muted">
          Click card to view package details &amp; apply
        </p>
      </div>
    </article>
  );
}

