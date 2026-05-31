import { textButtonStyle } from './TextButton.styles'

// A button that looks like inline body text — for tiny in-flow actions
// like "sign out" inside a sentence.
export function TextButton({ type = 'submit', children, ...rest }) {
  return (
    <button {...rest} type={type} style={textButtonStyle}>
      {children}
    </button>
  )
}
