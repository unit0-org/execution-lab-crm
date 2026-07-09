// Keep printable Latin + common punctuation (and newlines, for paragraph
// splitting); drop glyphs the subset brand fonts don't cover, so pdf-lib
// never throws on an unknown character.
export const cleanText = (text) =>
  String(text ?? '').replace(/[^\n -ɏ‐-‧]/g, '')
