// Greedily wrap one line of text into rows that fit within `maxWidth` for
// the given font/size. A single over-long word is left on its own row.
export function wrapText(text, font, size, maxWidth) {
  const words = String(text || '').split(/\s+/).filter(Boolean)
  const lines = []
  let line = ''

  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    const tooWide = font.widthOfTextAtSize(next, size) > maxWidth

    if (line && tooWide) {
      lines.push(line)
      line = word
      continue
    }

    line = next
  }

  if (line) lines.push(line)

  return lines.length ? lines : ['']
}
