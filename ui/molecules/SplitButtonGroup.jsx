import { Button } from '../atoms/Button'
import { Icon } from '../atoms/Icon'
import { groupStyle } from './SplitButton.styles'

// The joined pair — internal to SplitButton, not public API. The label runs
// the default action; the caret opens the rest.
export function SplitButtonGroup(props) {
  const { label, tone, size, busy, disabled, onRun, onOpen } = props
  const held = busy || disabled

  return (
    <span style={groupStyle}>
      <Button join="left" tone={tone} size={size} loading={busy}
        disabled={disabled} onClick={onRun}>{label}</Button>
      <Button join="right" tone={tone} size={size} icon disabled={held}
        onClick={onOpen} aria-label={`More ${label} options`}
        aria-haspopup="menu">
        <Icon name="chevron" size={16} />
      </Button>
    </span>
  )
}
