import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { FAQ_ITEMS, FAQ_CATEGORIES } from '../../data/guidance';
import EmptyState from './EmptyState';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.categoryId === activeCategory;
    const matchesSearch =
      !normalizedQuery ||
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const resetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6">
      {/* Filter & Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div
          role="tablist"
          aria-label="Filter frequently asked questions"
          className="flex flex-wrap items-center gap-2"
        >
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border cursor-pointer ${
                  isActive
                    ? 'bg-primary text-surface border-primary'
                    : 'bg-surface text-primary border-border hover:bg-secondary/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-72">
          <Search
            className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            aria-label="Search frequently asked questions"
            className="w-full rounded-lg border border-border bg-surface pl-9 pr-3.5 py-2 text-sm text-primary placeholder:text-muted/75 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25"
          />
        </div>
      </div>

      {/* Accordion List or Empty State */}
      {filteredFaqs.length === 0 ? (
        <EmptyState
          title="No matching questions found"
          description="We couldn't find an FAQ entry matching your search filter. Reset filters or send your question directly to our team."
          actionLabel="Reset FAQ Filters"
          onAction={resetFilters}
        />
      ) : (
        <div className="divide-y divide-border rounded-2xl bg-surface border border-border overflow-hidden surface-card">
          {filteredFaqs.map((item) => {
            const isExpanded = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={panelId}
                    onClick={() => handleToggle(item.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-background/70 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-primary">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-accent shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isExpanded && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm text-muted leading-relaxed bg-background/40"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

