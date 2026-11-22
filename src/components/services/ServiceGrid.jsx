import { useState } from 'react';
import { Scale } from 'lucide-react';
import {
  SERVICES_DATA,
  SERVICE_CATEGORIES,
  SERVICE_SCOPE_NOTICE,
} from '../../data/services';
import ServiceCard from './ServiceCard';

export default function ServiceGrid({ showFilters = true }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((service) => service.categoryId === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      {showFilters && (
        <div
          role="tablist"
          aria-label="Filter services by category"
          className="flex flex-wrap items-center gap-2"
        >
          {SERVICE_CATEGORIES.map((category) => {
            const isSelected = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium border cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-surface border-primary'
                    : 'bg-surface text-primary border-border hover:bg-secondary/60'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Services Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Regulatory Boundary Notice */}
      <div className="rounded-xl bg-secondary/65 border border-border p-5 sm:p-6 flex items-start gap-3.5">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-surface border border-border text-primary shrink-0 mt-0.5">
          <Scale className="w-4 h-4 text-accent" aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-semibold text-primary">
            {SERVICE_SCOPE_NOTICE.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            {SERVICE_SCOPE_NOTICE.description}
          </p>
        </div>
      </div>
    </div>
  );
}

