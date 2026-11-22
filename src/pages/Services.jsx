import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/common/Badge';

export default function Services() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="surface-card p-8 sm:p-10 space-y-3">
          <Badge>Services Route</Badge>
          <h1>Services</h1>
          <p className="text-muted max-w-2xl">
            GTR registration, courier onboarding (Wolt &amp; foodora), and monthly administration — detailed content coming in Milestone 6.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

