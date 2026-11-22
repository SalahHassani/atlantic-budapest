import PageContainer from '../components/layout/PageContainer';
import Badge from '../components/common/Badge';

export default function Contact() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <div className="surface-card p-8 sm:p-10 space-y-3">
          <Badge>Contact Route</Badge>
          <h1>Contact Us</h1>
          <p className="text-muted max-w-2xl">
            Reach Atlantic Budapest — contact form and enquiry handling coming in Milestone 5 &amp; Milestone 6.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

