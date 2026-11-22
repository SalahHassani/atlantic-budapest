import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOW_IT_WORKS_STEPS } from '../../data/guidance';
import PageContainer from '../layout/PageContainer';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-background border-t border-border">
      <PageContainer className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="How It Works"
            title="A Clear Four-Step Administrative Process"
            subtitle="From choosing your package to preparing documents and coordinating ongoing administration—every stage is transparent and structured."
          />

          <Link to="/pricing" className="shrink-0">
            <Button variant="primary" size="md">
              Start With a Package
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <article
              key={item.step}
              className="surface-card p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-primary text-surface text-xs font-bold tracking-wider">
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-primary">
                  {item.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <p className="pt-3 border-t border-border text-xs text-primary/80 leading-relaxed">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

