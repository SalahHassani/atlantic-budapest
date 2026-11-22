import { ShieldCheck, FileText, Globe2, Scale } from 'lucide-react';
import PageContainer from '../layout/PageContainer';
import SectionHeading from '../common/SectionHeading';

const TRUST_HIGHLIGHTS = [
  {
    icon: Globe2,
    title: 'Built for International Residents & Students',
    description:
      'Clear English-language guidance through Hungarian administrative steps for international students, expats, and self-employed couriers.',
  },
  {
    icon: FileText,
    title: 'Structured Document Preparation',
    description:
      'We help organize your required details and paperwork accurately before you submit applications for GTR registration or courier onboarding.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Privacy First',
    description:
      'We never request or store your government login passwords. Sensitive identification is handled only through official authentication or authorised procedures.',
  },
  {
    icon: Scale,
    title: 'Transparent Scope & Pricing in HUF',
    description:
      'Clear fixed package pricing in Hungarian Forints, with third-party statutory fees explained upfront and regulated accounting coordinated with qualified professionals.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <PageContainer className="space-y-10">
        <SectionHeading
          eyebrow="Why Atlantic Budapest"
          title="Reliable Administrative Guidance Without the Guesswork"
          subtitle="Focused, transparent support designed to help you navigate Hungarian sole-proprietorship setup and courier administration responsibly."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_HIGHLIGHTS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="surface-card p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary">
                    <IconComponent
                      className="w-5 h-5 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}

