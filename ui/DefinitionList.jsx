import { dlStyle, dtStyle, ddStyle } from './DefinitionList.styles'

export const DefinitionList = ({ children }) => <dl style={dlStyle}>{children}</dl>
export const DefTerm = ({ children }) => <dt style={dtStyle}>{children}</dt>
export const DefDescription = ({ children }) => <dd style={ddStyle}>{children}</dd>
