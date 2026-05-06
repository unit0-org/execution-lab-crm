import { tableStyle } from './Table.styles'

export function Table({ children }) {
  return <table style={tableStyle}>{children}</table>
}

export const TableHead = ({ children }) => <thead>{children}</thead>
export const TableBody = ({ children }) => <tbody>{children}</tbody>
export const TableRow  = ({ children }) => <tr>{children}</tr>
