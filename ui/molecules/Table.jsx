import { wrapStyle, tableStyle, thStyle } from './Table.styles'

const Head = ({ cols }) => (
  <thead>
    <tr>
      {cols.map((c) => <th key={c} style={thStyle}>{c}</th>)}
    </tr>
  </thead>
)

export function Table({ cols, children }) {
  return (
    <div style={wrapStyle}>
      <table style={tableStyle}>
        <Head cols={cols} />
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
