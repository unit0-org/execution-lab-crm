import { buttonStyle } from './Button.styles'

export function Button({ tone = 'default', size, block, type = 'button', children, ...rest }) {
  return (
    <button {...rest} type={type} data-tone={tone} style={buttonStyle({ tone, size, block })}>
      {children}
    </button>
  )
}
