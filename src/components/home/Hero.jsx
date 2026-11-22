import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import PageContainer from '../layout/PageContainer';
import Button from '../common/Button';
import Badge from '../common/Badge';

const HERO_PILLARS = [
  'Hungarian sole proprietorship (GTR) registration guidance',
  'Wolt & foodora courier onboarding assistance',
  'Dedicated support for international students & foreign residents',
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-surface border-b border-border py-10 sm:py-16 lg:py-24">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Introduction, Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <Badge tone="accent">
                <MapPin className="w-3.5 h-3.5 mr-1 inline" aria-hidden="true" />
                {SITE_CONFIG.location}
              </Badge>
              <span className="text-xs font-medium text-muted">
                {SITE_CONFIG.brandName} · {SITE_CONFIG.tagline}
              </span>
            </div>

            <h1 className="text-primary tracking-tight">
              Start Your Courier Business in Hungary. We&apos;ll Help You.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-muted leading-relaxed max-w-2xl">
              Atlantic Budapest assists couriers, self-employed individuals, international students, and foreign residents with Hungarian GTR business registration, Wolt and foodora onboarding preparation, and ongoing administrative support.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 pt-1">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto justify-center"
                onClick={() => navigate('/pricing')}
              >
                Get Started
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto justify-center"
                onClick={() => navigate('/services')}
              >
                Explore Services
              </Button>
            </div>

            {/* Concise Factual Highlights */}
            <ul className="pt-4 border-t border-border space-y-2.5">
              {HERO_PILLARS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-primary"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Visual Asset */}
          <div className="lg:col-span-5 min-w-0">
            <div className="rounded-2xl border border-border bg-background p-3 sm:p-4 surface-card">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-budapest-support.svg`}
                alt="Structured GTR business registration, courier onboarding, and administrative support workflow in Budapest"
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-3 px-2 py-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs text-muted">
                <span className="font-medium text-primary">
                  {SITE_CONFIG.altTagline}
                </span>
                <span>Wolt · foodora · GTR</span>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

