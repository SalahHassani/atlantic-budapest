import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import ServiceGrid from '../components/services/ServiceGrid';

export default function Services() {
  return (
    <section className="py-14 sm:py-20 bg-background">
      <PageContainer className="space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="Business Registration, Courier Onboarding & Ongoing Administration"
          subtitle="Structured administrative assistance in Budapest for sole proprietors, Wolt and foodora couriers, international students, and foreign residents."
        />

        <ServiceGrid showFilters />
      </PageContainer>
    </section>
  );
}

