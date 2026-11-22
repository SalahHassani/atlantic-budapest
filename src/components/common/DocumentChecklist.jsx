import { useState } from 'react';
import { CheckSquare, Square, RotateCcw, ShieldCheck } from 'lucide-react';
import { DOCUMENT_CHECKLIST_ITEMS } from '../../data/guidance';
import Badge from './Badge';
import Button from './Button';

export default function DocumentChecklist() {
  const [checkedIds, setCheckedIds] = useState([]);

  const toggleItem = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const completedCount = checkedIds.length;
  const totalCount = DOCUMENT_CHECKLIST_ITEMS.length;

  return (
    <div className="surface-card p-6 sm:p-8 space-y-6">
      {/* Header & Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge tone="accent">Preparation Guide</Badge>
            <span className="text-xs font-medium text-muted">
              {completedCount} of {totalCount} items checked
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary">
            Required Document &amp; Readiness Checklist
          </h3>
          <p className="text-sm text-muted">
            Use this interactive checklist to see what you typically need ready before starting GTR registration and courier onboarding.
          </p>
        </div>

        {completedCount > 0 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setCheckedIds([])}
            className="shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            Reset Checklist
          </Button>
        )}
      </div>

      {/* Checklist Items */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {DOCUMENT_CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                role="checkbox"
                aria-checked={isChecked}
                onClick={() => toggleItem(item.id)}
                className={`w-full text-left rounded-xl border p-4 flex items-start gap-3 transition-colors cursor-pointer ${
                  isChecked
                    ? 'bg-secondary/55 border-accent/50'
                    : 'bg-background/70 border-border hover:bg-background'
                }`}
              >
                <span className="mt-0.5 text-accent shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Square className="w-5 h-5 text-muted" aria-hidden="true" />
                  )}
                </span>
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted block">
                    {item.category}
                  </span>
                  <p
                    className={`text-sm font-semibold ${
                      isChecked ? 'text-primary line-through decoration-accent/60' : 'text-primary'
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Privacy & Security Assurance */}
      <div className="rounded-lg bg-secondary/60 border border-border p-3.5 flex items-start gap-2.5 text-xs text-primary">
        <ShieldCheck
          className="w-4 h-4 text-accent shrink-0 mt-0.5"
          aria-hidden="true"
        />
        <span>
          <strong>For your personal reference only:</strong> This checklist stays in your browser. Do not upload identity documents or enter government passwords on this website.
        </span>
      </div>
    </div>
  );
}

