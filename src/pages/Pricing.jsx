import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import PricingSection from '../components/pricing/PricingSection';
import CtaBanner from '../components/common/CtaBanner';

export default function Pricing() {
  useDocumentTitle(
    'Pricing & Packages',
    'Compare Atlantic First Month (15,000 HUF) and Atlantic Complete (50,000 HUF for 12 months) packages in Budapest, Hungary.'
  );

  return (
    <>
      <section className="bg-surface border-b border-border py-12 sm:py-16">
        <PageContainer>
          <SectionHeading
            eyebrow="Packages & Fees"
            title="Straightforward Pricing for Your Business Setup"
            subtitle="Select a package below to review everything included and submit your onboarding application directly online."
          />
        </PageContainer>
      </section>

      <PricingSection />

      <CtaBanner
        eyebrow="Need Single-Service Assistance?"
        title="Only Need Suspension, Reactivation, or Student Admin?"
        description="If you already have an active sole proprietorship and need targeted administrative support, send us a quick message with the service you need."
        primaryLabel="Contact Atlantic Budapest"
        primaryTo="/contact"
        secondaryLabel="Explore All Services"
        secondaryTo="/services"
      />
    </>
  );
}

