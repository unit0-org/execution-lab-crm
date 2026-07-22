import { thStyle, headerRowStyle } from './Table.styles'
import { SortLabel } from './SortLabel'

const keyOf = (c, i) => (typeof c === 'string' ? c || i : c.key || i)

/** Sortable table header row, built from `cols`. */
export function SortHeader({ cols, sort, onSort }) {
  return (
    <thead>
      <tr style={headerRowStyle}>
        {cols.map((c, i) => (
          <th key={keyOf(c, i)} style={thStyle}>
            <SortLabel col={c} sort={sort} onSort={onSort} />
          </th>
        ))}
      </tr>
    </thead>
  )
}
