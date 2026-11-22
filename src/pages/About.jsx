import { MapPin, Users, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import Badge from '../components/common/Badge';
import CtaBanner from '../components/common/CtaBanner';

const WHO_WE_HELP = [
  {
    title: 'App-Based Couriers (Wolt & foodora)',
    description:
      'Step-by-step administrative preparation for registering a Hungarian sole proprietorship and completing courier partner onboarding.',
  },
  {
    title: 'International Students in Hungary',
    description:
      'Clear, accessible English-language guidance through Hungarian business administration rules, documentation, and routine obligations.',
  },
  {
    title: 'Foreign Residents & Sole Proprietors',
    description:
      'Structured support with flat-rate taxation (átalányadózás) setup, invoice organisation, and lifecycle status updates.',
  },
];

const OPERATING_PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Strict Credential & Privacy Protection',
    description:
      'We never request, collect, or store government passwords or Ügyfélkapu credentials. Sensitive identification is only shared through appropriate official or secure channels.',
  },
  {
    icon: Scale,
    title: 'Clear Regulatory Boundaries',
    description:
      'We focus on administrative preparation, document organisation, and coordination. Regulated accounting, certified tax advice, and legal services are handled by qualified professionals where required by Hungarian law.',
  },
  {
    icon: Users,
    title: 'Transparent & Practical Communication',
    description:
      'Fixed package prices in HUF, clear explanations of separate statutory fees (such as the MKIK annual contribution), and honest timelines without exaggerated promises.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero / Introduction */}
      <section className="bg-surface border-b border-border py-12 sm:py-16">
        <PageContainer className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <Badge tone="accent">
                <MapPin className="w-3.5 h-3.5 mr-1 inline" aria-hidden="true" />
                {SITE_CONFIG.location}
              </Badge>
              <Badge tone="neutral">{SITE_CONFIG.tagline}</Badge>
            </div>

            <h1 className="text-primary">
              Making Business Administration Easier in Budapest
            </h1>

            <p className="text-base text-muted leading-relaxed">
              Atlantic Budapest provides practical business registration, courier onboarding assistance, and ongoing administrative support for individuals working in Hungary. Navigating unfamiliar administrative procedures in a new country can be overwhelming—our role is to bring clarity, organisation, and dependable coordination to every step.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-background border border-border p-6 sm:p-7 space-y-4 surface-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                At a Glance
              </p>
              <h2 className="text-xl font-bold text-primary">
                Focused Administrative Support
              </h2>
              <ul className="space-y-2.5 text-sm text-primary">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" aria-hidden="true" />
                  <span>Based in Budapest, Hungary</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" aria-hidden="true" />
                  <span>GTR sole proprietorship registration &amp; status management</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" aria-hidden="true" />
                  <span>Wolt &amp; foodora courier application assistance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" aria-hidden="true" />
                  <span>Monthly document &amp; invoice coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Who We Support */}
      <section className="py-14 sm:py-20 bg-background">
        <PageContainer className="space-y-10">
          <SectionHeading
            eyebrow="Who We Support"
            title="Tailored Assistance for Couriers, Students & Self-Employed Individuals"
            subtitle="Whether you are launching your first sole proprietorship in Hungary or maintaining ongoing records, we adapt our administrative guidance to your needs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHO_WE_HELP.map((group) => (
              <article key={group.title} className="surface-card p-6 sm:p-7 space-y-2.5">
                <h3 className="text-lg font-semibold text-primary">
                  {group.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {group.description}
                </p>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* How We Operate & Boundaries */}
      <section className="py-14 sm:py-20 bg-surface border-t border-border">
        <PageContainer className="space-y-10">
          <SectionHeading
            eyebrow="Our Standards"
            title="How Atlantic Budapest Works"
            subtitle="Built on clear scope boundaries, data privacy, and transparent communication."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OPERATING_PRINCIPLES.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <article key={principle.title} className="surface-card p-6 sm:p-7 space-y-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary">
                    <IconComponent className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>
        </PageContainer>
      </section>

      <CtaBanner
        eyebrow="Work With Us"
        title="Ready to Start or Manage Your Hungarian Business?"
        description="Explore our services and transparent packages, or reach out directly to discuss your situation."
        primaryLabel="Get Started"
        primaryTo="/pricing"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}

