import { Link } from 'react-router-dom';
import {
  FileCheck2,
  PauseCircle,
  PlayCircle,
  XCircle,
  Bike,
  Navigation,
  CalendarCheck,
  Receipt,
  GraduationCap,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import Badge from '../common/Badge';

const ICON_MAP = {
  FileCheck2,
  PauseCircle,
  PlayCircle,
  XCircle,
  Bike,
  Navigation,
  CalendarCheck,
  Receipt,
  GraduationCap,
};

export default function ServiceCard({ service, compact = false }) {
  const IconComponent = ICON_MAP[service.iconName] || FileCheck2;
  const visibleHighlights = compact
    ? service.highlights.slice(0, 3)
    : service.highlights;

  return (
    <article className="surface-card p-6 sm:p-7 flex flex-col justify-between space-y-5 h-full">
      <div className="space-y-3.5">
        {/* Top Row: Icon + Category Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-primary shrink-0">
            <IconComponent className="w-5 h-5 text-accent" aria-hidden="true" />
          </div>
          <Badge tone="neutral">{service.categoryLabel}</Badge>
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5">
          <h3 className="text-lg font-semibold text-primary leading-snug">
            {service.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Deliverables List */}
        <ul className="pt-3 border-t border-border space-y-2 text-xs sm:text-sm text-primary">
          {visibleHighlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Optional Platform Independence Note (Wolt / foodora) */}
        {!compact && service.platformNote && (
          <div className="rounded-lg bg-background border border-border p-3 flex items-start gap-2 text-xs text-muted">
            <Info
              className="w-4 h-4 text-accent shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span>{service.platformNote}</span>
          </div>
        )}
      </div>

      {/* Footer Action Link */}
      <div className="pt-3 border-t border-border flex items-center justify-between">
        <span className="text-xs text-muted">Administrative support</span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-accent"
        >
          Enquire
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}