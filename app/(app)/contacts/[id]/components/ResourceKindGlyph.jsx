const GLYPHS = {
  gdrive_folder: '▣',
  gdrive_doc:    '▤',
  gdrive_sheet:  '▦',
  gdrive_slides: '▥',
  notion:        '◫',
  link:          '↗',
}

export function ResourceKindGlyph({ kind }) {
  return <span aria-hidden>{GLYPHS[kind] || GLYPHS.link}</span>
}
