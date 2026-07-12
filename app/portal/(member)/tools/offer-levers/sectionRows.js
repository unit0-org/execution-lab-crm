// Normalize a doc section into label/value rows: context sections already
// carry `rows`; the levers section carries a `table` of [label, value] pairs.
export function sectionRows(section) {
  if (section.rows) return section.rows

  return section.table.rows.map((pair) => ({
    label: pair[0], value: pair[1] || '—'
  }))
}
