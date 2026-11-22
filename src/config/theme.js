export const THEME = {
  name: 'Atlantic Corporate Blue',
  colors: {
    primary: '#102A43',       // Primary navy (headings, primary buttons, key UI)
    background: '#F5F7FA',    // Main canvas background
    secondary: '#E1EAF1',     // Secondary surface / tint
    accent: '#16A6A1',        // Accent teal (highlights, active accents)
    white: '#FFFFFF',         // Card & elevated surface
    muted: '#64748B',         // Secondary/muted text
    border: '#DCE4EC',        // Card, input, and divider borders
  },
  distribution: {
    background: '50%',
    primary: '30%',
    secondary: '15%',
    accent: '5%',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  radii: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px (cards)
    xl: '1rem',       // 16px
    full: '9999px',   // pills
  },
  shadows: {
    subtle: '0 1px 2px 0 rgba(16, 42, 67, 0.05)',
    card: '0 4px 12px -2px rgba(16, 42, 67, 0.06), 0 1px 3px 0 rgba(16, 42, 67, 0.04)',
    elevated: '0 12px 24px -6px rgba(16, 42, 67, 0.10), 0 4px 8px -2px rgba(16, 42, 67, 0.04)',
  },
};