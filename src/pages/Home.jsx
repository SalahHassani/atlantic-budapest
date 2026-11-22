import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/common/Badge';
import { SITE_CONFIG } from '../config/site';

export default function Home() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="surface-card p-8 sm:p-10 space-y-3">
          <Badge tone="accent">Home Route</Badge>
          <h1>{SITE_CONFIG.brandName}</h1>
          <p className="text-muted max-w-2xl">
            {SITE_CONFIG.tagline} — Layout shell verified. Detailed homepage sections will be implemented in Milestone 3.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

