import { Link } from 'react-router-dom';
import { FileCheck2, Bike, CalendarCheck, Briefcase, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import PageContainer from '../layout/PageContainer';
import SectionHeading from '../common/SectionHeading';
import Badge from '../common/Badge';
import Button from '../common/Button';

const ICON_MAP = {
  FileCheck2,
  Bike,
  CalendarCheck,
  Briefcase,
};

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20 bg-surface border-t border-border">
      <PageContainer className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Our Services"
            title="End-to-End Business & Courier Administration"
            subtitle="From initial GTR sole-proprietorship registration to Wolt and foodora onboarding and ongoing monthly coordination."
          />

          <Link to="/services" className="shrink-0">
            <Button variant="secondary" size="md">
              View All Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || FileCheck2;
            return (
              <article
                key={service.id}
                className="surface-card p-6 sm:p-7 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary">
                      <IconComponent
                        className="w-5 h-5 text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <Badge tone="neutral">{service.category}</Badge>
                  </div>

                  <h3 className="text-lg font-semibold text-primary">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <ul className="pt-4 border-t border-border space-y-2 text-xs sm:text-sm text-primary">
                  {service.highlights.slice(0, 3).map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}

