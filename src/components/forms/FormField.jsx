export default function FormField({
  id,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  multiline = false,
  rows = 3,
  error,
  hint,
  registration,
  disabled = false,
}) {
  const baseControlClasses = `w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-primary placeholder:text-muted/70 focus:outline-none focus:ring-2 ${
    error
      ? 'border-red-600 focus:ring-red-600/20'
      : 'border-border focus:border-accent focus:ring-accent/25'
  } disabled:opacity-60 disabled:cursor-not-allowed`;

  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-xs sm:text-sm font-medium text-primary"
      >
        {label}
        {required && (
          <span className="text-accent ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={baseControlClasses}
          {...registration}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={baseControlClasses}
          {...registration}
        />
      )}

      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-700">
          {error.message}
        </p>
      )}
    </div>
  );
}

