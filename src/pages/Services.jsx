import { ClipboardList, Send, CalendarCheck } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import ServiceGrid from '../components/services/ServiceGrid';
import CtaBanner from '../components/common/CtaBanner';

const WORKFLOW_STEPS = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Information & Document Checklist',
    description:
      'We clarify which administrative steps apply to your situation and organize the required details before submission.',
  },
  {
    step: '02',
    icon: Send,
    title: 'Registration & Platform Onboarding',
    description:
      'Guided assistance through Hungarian sole-proprietorship (GTR) procedures and Wolt or foodora courier applications.',
  },
  {
    step: '03',
    icon: CalendarCheck,
    title: 'Ongoing Coordination & Lifecycle Updates',
    description:
      'Monthly administrative support, invoice organisation, and status changes (suspension, reactivation, or closure) as needed.',
  },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface border-b border-border py-12 sm:py-16">
        <PageContainer className="space-y-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Business Registration, Courier Onboarding & Ongoing Administration"
            subtitle="Structured administrative assistance in Budapest for sole proprietors, Wolt and foodora couriers, international students, and foreign residents."
          />

          {/* 3-Step Process Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {WORKFLOW_STEPS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-xl bg-background border border-border p-5 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary text-primary">
                      <IconComponent className="w-4 h-4 text-accent" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold tracking-wider text-muted">
                      STEP {item.step}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* Full 9-Service Catalog + Regulatory Scope Notice */}
      <section className="py-14 sm:py-20 bg-background">
        <PageContainer>
          <ServiceGrid showFilters />
        </PageContainer>
      </section>

      {/* Next-Step CTA */}
      <CtaBanner
        eyebrow="Ready to Begin?"
        title="Compare Our Transparent HUF Packages"
        description="Choose between Atlantic First Month (15,000 HUF) or Atlantic Complete (50,000 HUF for 12 months), or contact us if you need a single lifecycle service."
        primaryLabel="View Pricing Packages"
        primaryTo="/pricing"
        secondaryLabel="Ask a Question"
        secondaryTo="/contact"
      />
    </>
  );
}

