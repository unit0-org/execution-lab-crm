import { textStyle } from './Text.styles'

/** Body/paragraph text (`strike` for line-through). */
export function Text({ tone, size, gutter, strike, children }) {
  return (
    <p style={textStyle({ tone, size, gutter, strike })}>{children}</p>
  )
}
