import { Loader2 } from 'lucide-react';

const VARIANT_CLASSES = {
  primary:
    'bg-primary text-surface border border-primary hover:bg-[#193B5C] active:bg-[#0B1E30] disabled:opacity-50',
  secondary:
    'bg-secondary text-primary border border-border hover:bg-[#D2DFEA] active:bg-[#C3D3E1] disabled:opacity-50',
  accent:
    'bg-accent text-surface border border-accent hover:bg-[#128E8A] active:bg-[#0E7470] disabled:opacity-50',
  outline:
    'bg-surface text-primary border border-border hover:bg-background hover:border-primary/40 disabled:opacity-50',
  ghost:
    'bg-transparent text-primary border border-transparent hover:bg-secondary/70 disabled:opacity-50',
};

const SIZE_CLASSES = {
  sm: 'h-9 px-3.5 text-xs font-medium rounded-md gap-1.5',
  md: 'h-10 px-4 text-sm font-medium rounded-lg gap-2',
  lg: 'h-12 px-6 text-sm font-semibold rounded-lg gap-2',
};

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...rest
}) {
  const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`inline-flex items-center justify-center whitespace-nowrap cursor-pointer disabled:cursor-not-allowed ${variantClass} ${sizeClass} ${className}`}
      {...rest}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}