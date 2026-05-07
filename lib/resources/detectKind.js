// Best-effort URL → resource_kind enum value. Falls back to 'link'.
const RULES = [
  [/drive\.google\.com\/drive\/folders/, 'gdrive_folder'],
  [/docs\.google\.com\/document/,        'gdrive_doc'],
  [/docs\.google\.com\/spreadsheets/,    'gdrive_sheet'],
  [/docs\.google\.com\/presentation/,    'gdrive_slides'],
  [/notion\.(so|site)/,                  'notion'],
]

export function detectResourceKind(url = '') {
  for (const [pattern, kind] of RULES) {
    if (pattern.test(url)) return kind
  }

  return 'link'
}
