import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { SITE_CONFIG } from '../../config/site';
import PageContainer from './PageContainer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-surface border-t border-border mt-auto">
      <PageContainer className="py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface text-primary font-bold text-sm">
                A<span className="text-accent">.</span>
              </span>
              <span className="text-lg font-bold tracking-tight text-surface">
                {SITE_CONFIG.brandName}
              </span>
            </Link>
            <p className="text-sm font-medium text-accent">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-secondary/85 leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary/70">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-secondary/90 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary/70">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-secondary/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-accent break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="hover:text-accent"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Administrative Scope & Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-surface/15 space-y-3 text-xs text-secondary/75">
          <p className="leading-relaxed">
            Atlantic Budapest provides administrative assistance and coordination. Regulated accounting, tax advisory, and legal services are handled by appropriately qualified professionals where required by Hungarian law.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1">
            <p>
              &copy; {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
            </p>
            <p className="text-secondary/65">
              {SITE_CONFIG.altTagline}
            </p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

