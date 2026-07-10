// Escape a string for safe interpolation into the digest's HTML body — the
// contact/event names it renders are untrusted CRM data.
export function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
