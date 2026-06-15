import { buttonStyle } from './Button.styles'
import { Pending } from './Pending'

export function Button({
  tone = 'default', size, block, loading, disabled, children, ...rest
}) {
  const style = buttonStyle({ tone, size, block })
  const type = rest.type || 'button'
  const isDisabled = loading || disabled
  const content = loading ? <Pending>{children}</Pending> : children

  return (
    <button
      {...rest}
      type={type}
      data-tone={tone}
      disabled={isDisabled}
      aria-busy={loading}
      style={style}
    >
      {content}
    </button>
  )
}
