import { useNavigate } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/common/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="py-20 sm:py-28">
      <PageContainer>
        <div className="max-w-lg mx-auto surface-card p-8 sm:p-10 text-center space-y-5">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-primary mx-auto">
            <Compass className="w-6 h-6 text-accent" aria-hidden="true" />
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              404 — Page Not Found
            </p>
            <h1 className="text-2xl sm:text-3xl">We couldn&apos;t find that page</h1>
            <p className="text-sm text-muted leading-relaxed">
              The link may have moved or no longer exists. Use the buttons below to return to Atlantic Budapest.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Home
            </Button>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Contact Support
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

