import { pageStyle } from './Page.styles'

export function Page({ width = 'narrow', children }) {
  return <main style={pageStyle(width)}>{children}</main>
}
