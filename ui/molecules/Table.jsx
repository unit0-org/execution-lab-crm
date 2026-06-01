import { wrapStyle, tableStyle } from './Table.styles'
import { SortHeader } from './SortHeader'

export function Table({ cols, sort, onSort, children }) {
  return (
    <div style={wrapStyle}>
      <table style={tableStyle}>
        <SortHeader cols={cols} sort={sort} onSort={onSort} />
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
