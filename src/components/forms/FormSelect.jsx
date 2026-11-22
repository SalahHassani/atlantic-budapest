export default function FormSelect({
  id,
  label,
  options = [],
  required = false,
  error,
  hint,
  registration,
  disabled = false,
}) {
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

      <select
        id={id}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={`w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm text-primary focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-600 focus:ring-red-600/20'
            : 'border-border focus:border-accent focus:ring-accent/25'
        } disabled:opacity-60 disabled:cursor-not-allowed`}
        {...registration}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

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

