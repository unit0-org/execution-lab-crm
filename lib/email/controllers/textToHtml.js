const esc = (s) => s
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

// Plain-text email body → simple HTML: blank lines separate paragraphs,
// single newlines become <br>. Text is escaped, so authors never write
// raw HTML — they just type, and a blank line starts a new paragraph.
export function textToHtml(text) {
  const trimmed = (text || '').trim()

  if (!trimmed) return ''

  return trimmed
    .split(/\n\s*\n/)
    .map((block) => `<p>${esc(block).replace(/\n/g, '<br>')}</p>`)
    .join('')
}
