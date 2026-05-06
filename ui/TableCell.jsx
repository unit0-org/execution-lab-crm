import { cellStyle, headerStyle } from './Table.styles'

export function TableCell({ align, tone, children }) {
  return <td style={cellStyle({ align, tone })}>{children}</td>
}

export function TableHeader({ align, children }) {
  return <th style={headerStyle({ align })}>{children}</th>
}
