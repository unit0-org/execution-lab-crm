import { pageStyle } from './Page.styles'

export function Page({ width = 'wide', children }) {
  return <main style={pageStyle(width)}>{children}</main>
}
