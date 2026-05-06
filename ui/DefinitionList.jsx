const dlStyle = {
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  columnGap: '1.5rem',
  rowGap: '0.75rem',
}

const dtStyle = { color: '#666' }
const ddStyle = { margin: 0 }

export const DefinitionList = ({ children }) => <dl style={dlStyle}>{children}</dl>
export const DefTerm = ({ children }) => <dt style={dtStyle}>{children}</dt>
export const DefDescription = ({ children }) => <dd style={ddStyle}>{children}</dd>
