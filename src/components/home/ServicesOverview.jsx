import { Link } from 'react-router-dom';
import { ArrowRight, Scale } from 'lucide-react';
import { SERVICES_DATA, SERVICE_SCOPE_NOTICE } from '../../data/services';
import PageContainer from '../layout/PageContainer';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import Button from '../common/Button';

export default function ServicesOverview() {
  const featuredServices = SERVICES_DATA.filter((item) => item.featuredOnHome);

  return (
    <section className="py-16 sm:py-20 bg-surface border-t border-border">
      <PageContainer className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Services"
            title="End-to-End Business & Courier Administration"
            subtitle="From initial GTR sole-proprietorship registration and status changes to Wolt and foodora onboarding, tax coordination, and student support."
          />

          <Link to="/services" className="shrink-0">
            <Button variant="secondary" size="md">
              Explore All 9 Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </div>

        <div className="rounded-xl bg-background border border-border p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-muted">
          <Scale
            className="w-4 h-4 text-accent shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="leading-relaxed">
            <strong className="font-semibold text-primary">
              Scope Clarification:
            </strong>{' '}
            {SERVICE_SCOPE_NOTICE.description}
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

