import { textStyle } from './Text.styles'

export function Text({ tone, size, gutter, strike, children }) {
  return (
    <p style={textStyle({ tone, size, gutter, strike })}>{children}</p>
  )
}
