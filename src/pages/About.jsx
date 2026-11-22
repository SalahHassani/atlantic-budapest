import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/common/Badge';

export default function About() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="surface-card p-8 sm:p-10 space-y-3">
          <Badge>About Us Route</Badge>
          <h1>About Atlantic Budapest</h1>
          <p className="text-muted max-w-2xl">
            Administrative support based in Budapest, Hungary — detailed company overview coming in Milestone 6.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

