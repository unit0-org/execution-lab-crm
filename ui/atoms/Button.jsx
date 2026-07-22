import { buttonStyle } from './Button.styles'
import { Pending } from './Pending'

/**
 * Primary/secondary actions; `tone` from `Button.tones`; `loading` shows
 * a spinner + disables while keeping size (no CLS); `icon` makes a compact
 * square that centres a single icon child.
 */
export function Button({
  tone = 'default', size, block, icon, loading, disabled, children, ...rest
}) {
  const style = buttonStyle({ tone, size, block, icon })
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
