import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ServicesOverview from '../components/home/ServicesOverview';
import PricingSection from '../components/pricing/PricingSection';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import FaqAccordion from '../components/common/FaqAccordion';
import CtaBanner from '../components/common/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <HowItWorksSection />
      <ServicesOverview />
      <PricingSection />

      <section id="faq" className="py-16 sm:py-20 bg-surface border-t border-border">
        <PageContainer className="space-y-10">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Clear Answers Before You Get Started"
            subtitle="Key information on GTR registration, Wolt and foodora onboarding, statutory fees, and our administrative scope."
          />
          <FaqAccordion />
        </PageContainer>
      </section>

      <CtaBanner
        eyebrow="Questions Before You Start?"
        title="Speak With Atlantic Budapest"
        description="Not sure whether Atlantic First Month or Atlantic Complete fits your timeline? Send us an enquiry and we will point you in the right direction."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Explore All Services"
        secondaryTo="/services"
      />
    </>
  );
}

