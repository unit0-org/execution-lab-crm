import { escapeHtml } from './escapeHtml'

const detail = (secondary) =>
  secondary ? ` — ${escapeHtml(secondary)}` : ''

// One "primary — secondary" list line; the secondary half is optional.
export function renderRow({ primary, secondary }) {
  const name = `<strong>${escapeHtml(primary)}</strong>`

  return `<li style="margin:4px 0">${name}${detail(secondary)}</li>`
}
