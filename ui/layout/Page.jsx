import { pageStyle } from './Page.styles'

/** Top-level page container. */
export function Page({ width = 'wide', children }) {
  return <main style={pageStyle(width)}>{children}</main>
}
