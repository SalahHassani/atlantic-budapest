import { Info } from 'lucide-react';
import {
  INDIVIDUAL_FEES,
  PACKAGES_DATA,
  PACKAGE_COMPARISON_ROWS,
  PRICING_DISCLOSURES,
} from '../../data/packages';
import { formatHUF } from '../../utils/formatCurrency';
import { useModal } from '../../hooks/useModal';
import PageContainer from '../layout/PageContainer';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import PricingCard from './PricingCard';
import PackageDetailsModal from '../modals/PackageDetailsModal';

export default function PricingSection() {
  const { isOpen, modalData: selectedPackage, openModal, closeModal } = useModal(false);

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-background border-t border-border">
      <PageContainer className="space-y-12">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="Clear Packages & Standard Service Fees in HUF"
          subtitle="Choose a discounted bundle below or review our individual service fees and statutory contributions upfront. Click either package card to view details and apply."
          align="center"
        />

        {/* Two Interactive Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PACKAGES_DATA.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              isSelected={isOpen && selectedPackage?.id === pkg.id}
              onSelect={(clickedPkg) => openModal(clickedPkg)}
            />
          ))}
        </div>

        {/* Individual Service Fees & MKIK Statutory Fee Breakdown */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              Standard Individual Service &amp; Statutory Fees
            </h3>
            <p className="text-sm text-muted">
              Transparent breakdown of each standalone service fee and the separate MKIK Chamber of Commerce contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDIVIDUAL_FEES.map((item) => (
              <article
                key={item.id}
                className="surface-card p-5 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <Badge
                    tone={item.id === 'mkik-statutory-fee' ? 'neutral' : 'accent'}
                  >
                    {item.billingLabel}
                  </Badge>
                  <h4 className="text-base font-semibold text-primary leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border">
                  <span className="text-xl font-bold text-primary">
                    {formatHUF(item.fee)}
                  </span>
                  {item.id === 'monthly-account-management' && (
                    <span className="text-xs text-muted ml-1">/ month</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

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

      {/* Interactive Package Details & Application Modal */}
      <PackageDetailsModal
        isOpen={isOpen}
        selectedPackage={selectedPackage}
        onSelectPackage={(updatedPkg) => openModal(updatedPkg)}
        onClose={closeModal}
      />
    </section>
  );
}

