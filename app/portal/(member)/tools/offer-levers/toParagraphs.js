// Split a pasted generated-offer into display paragraphs: break on blank
// lines, and fold single line-breaks within a paragraph into spaces.
export function toParagraphs(text) {
  return text.split(/\n{2,}/)
    .map((para) => para.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean)
}
