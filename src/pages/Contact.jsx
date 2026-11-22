import { Mail, Phone, MapPin, Scale } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/forms/ContactForm';

export default function Contact() {
  return (
    <section className="py-14 sm:py-20 bg-background">
      <PageContainer className="space-y-10">
        <SectionHeading
          eyebrow="Contact Atlantic Budapest"
          title="Get in Touch With Our Team"
          subtitle="Have a question about GTR sole-proprietorship registration, Wolt or foodora courier onboarding, or monthly administration? Send us a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Scope Note */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="surface-card p-6 sm:p-7 space-y-5">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-primary">
                  Direct Contact Details
                </h3>
                <p className="text-sm text-muted">
                  Reach us directly by email or phone in Budapest.
                </p>
              </div>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary text-primary shrink-0">
                    <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted">Location</p>
                    <p className="font-semibold text-primary">{SITE_CONFIG.location}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary text-primary shrink-0">
                    <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-semibold text-primary hover:text-accent break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-secondary text-primary shrink-0">
                    <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted">Phone</p>
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="font-semibold text-primary hover:text-accent"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-surface border border-border p-5 flex items-start gap-3 text-xs sm:text-sm text-muted">
              <Scale className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="leading-relaxed">
                {SITE_CONFIG.legalDisclaimer}
              </p>
            </div>
          </aside>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7 surface-card p-6 sm:p-8">
            <div className="mb-6 space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-primary">
                Send an Enquiry
              </h3>
              <p className="text-sm text-muted">
                All submissions are routed to {SITE_CONFIG.email}.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

