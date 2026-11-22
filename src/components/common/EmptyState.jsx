import { SearchX } from 'lucide-react';
import Button from './Button';

export default function EmptyState({
  title = 'No matching items found',
  description = 'Try clearing your search or selecting a different category.',
  actionLabel,
  onAction,
}) {
  return (
    <div
      role="status"
      className="rounded-xl bg-surface border border-border p-8 text-center space-y-3"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary mx-auto">
        <SearchX className="w-5 h-5 text-accent" aria-hidden="true" />
      </div>
      <div className="space-y-1 max-w-md mx-auto">
        <h3 className="text-base font-semibold text-primary">{title}</h3>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
      {actionLabel && onAction && (
        <div className="pt-1">
          <Button type="button" variant="outline" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

