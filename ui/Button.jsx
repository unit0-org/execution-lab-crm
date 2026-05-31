import { buttonStyle } from './Button.styles'

export function Button({ tone = 'default', size, block, children, ...rest }) {
  const style = buttonStyle({ tone, size, block })
  const type = rest.type || 'button'
  return (
    <button {...rest} type={type} data-tone={tone} style={style}>
      {children}
    </button>
  )
}
