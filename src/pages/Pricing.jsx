import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/common/Badge';

export default function Pricing() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="surface-card p-8 sm:p-10 space-y-3">
          <Badge>Pricing Route</Badge>
          <h1>Pricing</h1>
          <p className="text-muted max-w-2xl">
            Atlantic First Month and Atlantic Complete packages — interactive cards and modal coming in Milestone 4 &amp; Milestone 6.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

