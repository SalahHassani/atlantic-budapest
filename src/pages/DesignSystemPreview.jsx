import { Check, Shield, Layers, Type, Sparkles } from 'lucide-react';
import { THEME } from '../config/theme';
import { SITE_CONFIG } from '../config/site';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

const COLOR_SWATCHES = [
  { name: 'Primary Navy', token: '--color-primary', hex: THEME.colors.primary, textOn: 'text-surface' },
  { name: 'Main Background', token: '--color-background', hex: THEME.colors.background, textOn: 'text-primary' },
  { name: 'Secondary Surface', token: '--color-secondary', hex: THEME.colors.secondary, textOn: 'text-primary' },
  { name: 'Accent Teal', token: '--color-accent', hex: THEME.colors.accent, textOn: 'text-surface' },
  { name: 'White Card', token: '--color-surface', hex: THEME.colors.white, textOn: 'text-primary' },
  { name: 'Muted Slate', token: '--color-muted', hex: THEME.colors.muted, textOn: 'text-surface' },
  { name: 'Border Subtle', token: '--color-border', hex: THEME.colors.border, textOn: 'text-primary' },
];

export default function DesignSystemPreview() {
  return (
    <div className="min-h-screen bg-background text-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <header className="surface-card p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Badge tone="accent">Milestone 1 · Design System</Badge>
              <Badge tone="default">{THEME.name}</Badge>
            </div>
            <h1 className="text-primary">{SITE_CONFIG.brandName}</h1>
            <p className="text-muted text-sm sm:text-base max-w-2xl">
              {SITE_CONFIG.tagline} — {SITE_CONFIG.altTagline}
            </p>
          </div>
          <div className="text-xs text-muted space-y-1 sm:text-right">
            <p className="font-medium text-primary">{SITE_CONFIG.teamName}</p>
            <p>{SITE_CONFIG.location}</p>
            <p>Font: Inter</p>
          </div>
        </header>

        {/* Color Palette & Distribution */}
        <section className="surface-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl">Color Palette &amp; Distribution</h2>
            </div>
            <p className="text-xs text-muted">
              Guideline: {THEME.distribution.background} BG · {THEME.distribution.primary} Primary ·{' '}
              {THEME.distribution.secondary} Secondary · {THEME.distribution.accent} Accent
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {COLOR_SWATCHES.map((swatch) => (
              <div
                key={swatch.name}
                className="border border-border rounded-lg overflow-hidden bg-surface"
              >
                <div
                  className="h-16 w-full border-b border-border flex items-end p-2.5"
                  style={{ backgroundColor: swatch.hex }}
                >
                  <span
                    className={`text-xs font-mono px-1.5 py-0.5 rounded ${
                      swatch.hex === '#102A43' || swatch.hex === '#64748B'
                        ? 'bg-black/25 text-white'
                        : swatch.hex === '#16A6A1'
                          ? 'bg-black/20 text-white'
                          : 'bg-white/85 text-primary'
                    }`}
                  >
                    {swatch.hex}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-primary">{swatch.name}</p>
                  <p className="text-xs text-muted font-mono mt-0.5">{swatch.token}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography Hierarchy */}
        <section className="surface-card p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-accent" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl">Typography Hierarchy (Inter)</h2>
          </div>

          <div className="space-y-4 divide-y divide-border">
            <div className="pt-2 first:pt-0">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">Heading 1</span>
              <h1 className="mt-1">Clear Business Administration in Budapest</h1>
            </div>
            <div className="pt-4">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">Heading 2</span>
              <h2 className="mt-1">Structured Support for Couriers &amp; Sole Proprietors</h2>
            </div>
            <div className="pt-4">
              <span className="text-xs font-medium text-muted uppercase tracking-wider">Heading 3</span>
              <h3 className="mt-1">GTR Registration, Courier Onboarding &amp; Monthly Admin</h3>
            </div>
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-medium text-muted uppercase tracking-wider">Body Copy</span>
                <p className="mt-1 text-primary text-base">
                  Primary body text in Navy (#102A43) over White (#FFFFFF) or Background (#F5F7FA) provides crisp readability for long-form service explanations.
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-muted uppercase tracking-wider">Muted / Caption Copy</span>
                <p className="mt-1 text-muted text-sm">
                  Secondary metadata and helper text in Muted Slate (#64748B) maintains clear visual hierarchy without visual clutter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons, Badges & Surfaces */}
        <section className="surface-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl">Buttons, Badges &amp; Surface Elevation</h2>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium text-muted uppercase tracking-wider">Button Variants</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary Action</Button>
              <Button variant="accent">Accent CTA</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-border">
            <p className="text-xs font-medium text-muted uppercase tracking-wider">Button Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" variant="primary">Small</Button>
              <Button size="md" variant="primary">Medium</Button>
              <Button size="lg" variant="primary">Large</Button>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-border">
            <p className="text-xs font-medium text-muted uppercase tracking-wider">Elevation &amp; Radius</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-border bg-surface surface-subtle">
                <p className="text-sm font-semibold text-primary">Subtle Shadow</p>
                <p className="text-xs text-muted mt-1">12px radius · low-lift controls</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-surface surface-card">
                <p className="text-sm font-semibold text-primary">Card Shadow</p>
                <p className="text-xs text-muted mt-1">12px radius · standard content cards</p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-surface surface-elevated">
                <p className="text-sm font-semibold text-primary flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-accent" aria-hidden="true" />
                  Elevated Shadow
                </p>
                <p className="text-xs text-muted mt-1">12px radius · modals &amp; focus panels</p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-border flex items-center justify-between flex-wrap gap-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-accent" aria-hidden="true" />
              WCAG-conscious contrast &amp; keyboard focus rings enabled
            </span>
            <span>Milestone 1 Verification View</span>
          </div>
        </section>
      </div>
    </div>
  );
}