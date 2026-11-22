import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import ServicesOverview from '../components/home/ServicesOverview';
import PricingSection from '../components/pricing/PricingSection';
import CtaBanner from '../components/common/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <PricingSection />
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

