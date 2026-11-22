import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, ArrowRight } from 'lucide-react';
import { NAV_LINKS, LANGUAGE_OPTIONS } from '../../data/navigation';
import { SITE_CONFIG } from '../../config/site';
import PageContainer from './PageContainer';
import Button from '../common/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const langDropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setLangMenuOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-2.5 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium whitespace-nowrap transition-colors ${
      isActive
        ? 'text-primary bg-secondary/80 font-semibold'
        : 'text-muted hover:text-primary hover:bg-background'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-3.5 py-3 rounded-lg text-sm font-medium ${
      isActive
        ? 'bg-secondary text-primary font-semibold'
        : 'text-primary hover:bg-background'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur border-b border-border">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-surface focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <PageContainer>
        <div className="h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0 focus-visible:outline-accent rounded-md"
            aria-label={`${SITE_CONFIG.brandName} — Home`}
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt={SITE_CONFIG.brandName}
              className="h-7 sm:h-8 md:h-9 w-auto max-w-[175px] sm:max-w-none"
            />
          </Link>

          {/* Tablet & Desktop Links */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Tablet & Desktop Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                aria-expanded={langMenuOpen}
                aria-haspopup="listbox"
                aria-label="Select language"
                className="inline-flex items-center gap-1.5 h-9 px-2.5 rounded-md border border-border bg-background text-xs font-medium text-primary hover:bg-secondary/60 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                <span>{selectedLang}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-muted transition-transform ${
                    langMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {langMenuOpen && (
                <div
                  role="listbox"
                  aria-label="Available languages"
                  className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg surface-elevated py-1.5 z-50"
                >
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      role="option"
                      aria-selected={selectedLang === lang.code}
                      disabled={!lang.available}
                      onClick={() => {
                        if (lang.available) {
                          setSelectedLang(lang.code);
                          setLangMenuOpen(false);
                        }
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between ${
                        lang.available
                          ? 'text-primary hover:bg-background cursor-pointer font-medium'
                          : 'text-muted cursor-not-allowed opacity-75'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {selectedLang === lang.code && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="primary"
              size="sm"
              className="whitespace-nowrap"
              onClick={() => navigate('/pricing')}
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-surface text-primary hover:bg-background cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </PageContainer>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-surface border-t border-border shadow-md max-h-[80dvh] overflow-y-auto"
        >
          <PageContainer className="py-4 space-y-4">
            <nav aria-label="Mobile Navigation" className="space-y-1">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={mobileNavLinkClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-border flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 px-3 py-2.5 rounded-lg border border-border bg-background text-xs font-medium text-primary">
                <Globe className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                <span>Language: {selectedLang}</span>
                <span className="text-muted">(HU soon)</span>
              </div>

              <Button
                variant="primary"
                size="sm"
                className="w-full sm:w-auto justify-center"
                onClick={() => navigate('/pricing')}
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Button>
            </div>
          </PageContainer>
        </div>
      )}
    </header>
  );
}

