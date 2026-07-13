export function formatDuration(milliseconds) {
  if (!milliseconds && milliseconds !== 0) return '';

  if (milliseconds < 1000) return `${Math.round(milliseconds)}ms`;

  const seconds = milliseconds / 1000;

  if (seconds < 60) return `${seconds.toFixed(1)}s`;

  const minutes = Math.floor(seconds / 60);
  const remainder = Math.round(seconds % 60);

  return `${minutes}m ${remainder}s`;
}
