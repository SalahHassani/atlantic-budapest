import { X, Check, Info } from 'lucide-react';
import { formatHUF } from '../../utils/formatCurrency';
import Badge from '../common/Badge';
import PackageForm from '../forms/PackageForm';

export default function PackageDetailsModal({
  isOpen,
  selectedPackage,
  onSelectPackage,
  onClose,
}) {
  if (!isOpen || !selectedPackage) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="package-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-surface border border-border surface-elevated">
        {/* Sticky Top Header */}
        <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur border-b border-border px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <Badge tone={selectedPackage.featured ? 'accent' : 'default'}>
              {selectedPackage.badge}
            </Badge>
            <h3
              id="package-modal-title"
              className="text-lg sm:text-xl font-bold text-primary"
            >
              {selectedPackage.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close package details modal"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-background text-primary hover:bg-secondary cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Two-Column Body: Package Summary & Inclusions (Left) + Application Form (Right) */}
        <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Price & Included Services */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-xl bg-primary text-surface p-5 space-y-1.5">
              <p className="text-xs uppercase tracking-wider text-secondary/75">
                Package Fee · {selectedPackage.durationLabel}
              </p>
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <span className="text-3xl font-bold text-surface">
                  {formatHUF(selectedPackage.price)}
                </span>
                {selectedPackage.originalPrice && (
                  <span className="text-sm line-through text-secondary/70">
                    {formatHUF(selectedPackage.originalPrice)}
                  </span>
                )}
              </div>
              {selectedPackage.discountNote && (
                <p className="text-xs text-accent font-medium pt-1">
                  {selectedPackage.discountNote}
                </p>
              )}
            </div>

            <p className="text-sm text-muted leading-relaxed">
              {selectedPackage.summary}
            </p>

            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Included Services
              </p>
              <ul className="space-y-2">
                {selectedPackage.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs sm:text-sm text-primary"
                  >
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent/15 text-accent shrink-0 mt-0.5">
                      <Check className="w-3 h-3" aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-background border border-border p-3.5 flex items-start gap-2 text-xs text-muted">
              <Info
                className="w-4 h-4 text-accent shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="leading-relaxed">
                Third-party and statutory fees (including the MKIK annual contribution, currently quoted separately at 5,000 HUF) are separate from package fees.
              </span>
            </div>
          </div>

          {/* Right Column: Customer Application Form */}
          <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-8 space-y-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-primary">
                Apply for {selectedPackage.name}
              </h4>
              <p className="text-xs sm:text-sm text-muted mt-0.5">
                Complete your contact details below and Atlantic Budapest will follow up to begin your onboarding.
              </p>
            </div>

            <PackageForm
              selectedPackage={selectedPackage}
              onPackageChange={onSelectPackage}
              onSuccessClose={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

