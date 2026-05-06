import { buttonStyle } from './Button.styles'

export function Button({ tone, size, block, type = 'button', children, ...rest }) {
  return (
    <button {...rest} type={type} style={buttonStyle({ tone, size, block })}>
      {children}
    </button>
  )
}
