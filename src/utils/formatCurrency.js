export function formatHUF(amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    return '';
  }

  return `${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(amount)} HUF`;
}