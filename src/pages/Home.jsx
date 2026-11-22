import Hero from '../components/home/Hero';
import TrustSection from '../components/home/TrustSection';
import ServicesOverview from '../components/home/ServicesOverview';
import PricingSection from '../components/pricing/PricingSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <PricingSection />
    </>
  );
}

