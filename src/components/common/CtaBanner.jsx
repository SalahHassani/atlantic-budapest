import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageContainer from '../layout/PageContainer';
import Button from './Button';

export default function CtaBanner({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 bg-surface border-t border-border">
      <PageContainer>
        <div className="rounded-2xl bg-primary text-surface p-7 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 surface-elevated">
          <div className="space-y-2.5 max-w-2xl">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl font-bold text-surface">
              {title}
            </h2>
            {description && (
              <p className="text-sm sm:text-base text-secondary/85 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {primaryLabel && primaryTo && (
              <Button
                variant="accent"
                size="lg"
                onClick={() => navigate(primaryTo)}
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            )}
            {secondaryLabel && secondaryTo && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate(secondaryTo)}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

