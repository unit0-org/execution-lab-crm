import { tdStyle, truncateStyle } from './Table.styles'

export function Td({ truncate, children }) {
  if (truncate) {
    return (
      <td style={tdStyle}>
        <span style={truncateStyle}>{children}</span>
      </td>
    )
  }

  return <td style={tdStyle}>{children}</td>
}
