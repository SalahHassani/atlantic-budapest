import { useState } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import {
  PACKAGES_DATA,
  PACKAGE_COMPARISON_ROWS,
  PRICING_DISCLOSURES,
} from '../../data/packages';
import { formatHUF } from '../../utils/formatCurrency';
import PageContainer from '../layout/PageContainer';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Button from '../common/Button';
import PricingCard from './PricingCard';

export default function PricingSection({ onSelectPackage }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    if (onSelectPackage) {
      onSelectPackage(pkg);
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-background border-t border-border">
      <PageContainer className="space-y-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Clear Packages in HUF. No Hidden Surprises."
          subtitle="Choose between initial first-month onboarding support or full 12-month administrative coverage. Click either package card to inspect details and start your application."
          align="center"
        />

        {/* Two Interactive Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              isSelected={selectedPackage?.id === pkg.id}
              onSelect={handlePackageSelect}
            />
          ))}
        </div>

        {/* Interactive Package Details Preview Banner (when a card is clicked) */}
        {selectedPackage && !onSelectPackage && (
          <div
            role="region"
            aria-live="polite"
            className="max-w-5xl mx-auto rounded-2xl bg-surface border-2 border-accent p-6 sm:p-7 surface-elevated space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge tone="accent">Selected Package</Badge>
                  <span className="text-xs text-muted">
                    Duration: {selectedPackage.durationLabel}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {selectedPackage.name} — {formatHUF(selectedPackage.price)}
                </h3>
                <p className="text-sm text-muted">
                  {selectedPackage.summary}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                aria-label="Close package details preview"
                className="p-2 rounded-lg border border-border text-muted hover:text-primary hover:bg-background cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-border">
              {selectedPackage.features.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-primary">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between flex-wrap gap-3 text-xs text-muted">
              <span>
                Ready for modal application form integration in the next milestone.
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedPackage(null)}
              >
                Clear Selection
              </Button>
            </div>
          </div>
        )}

        {/* Side-by-Side Package Comparison Table */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              Package Comparison
            </h3>
            <p className="text-sm text-muted">
              Compare coverage between Atlantic First Month and Atlantic Complete.
            </p>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-secondary/60 border-b border-border text-xs sm:text-sm font-semibold text-primary">
                    <th className="py-3.5 px-4 sm:px-6 w-1/2">Service Scope</th>
                    <th className="py-3.5 px-4 sm:px-6 w-1/4">
                      Atlantic First Month
                    </th>
                    <th className="py-3.5 px-4 sm:px-6 w-1/4 bg-primary text-surface">
                      Atlantic Complete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-xs sm:text-sm">
                  {PACKAGE_COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="hover:bg-background/60">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-primary">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-muted">
                        {row.firstMonth}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-primary bg-secondary/20">
                        {row.complete}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Statutory & Third-Party Fee Disclosures */}
        <div className="max-w-5xl mx-auto rounded-xl bg-surface border border-border p-5 sm:p-6 space-y-2.5">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Info className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
            <span>Important Pricing &amp; Statutory Fee Information</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-muted pl-6 list-disc">
            {PRICING_DISCLOSURES.map((note) => (
              <li key={note} className="leading-relaxed">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </PageContainer>
    </section>
  );
}

