import { Button } from '../atoms/Button'
import { SubmitButton } from '../atoms/SubmitButton'

// The row's finishing action — internal to FormActions, not public API. A
// submit reads its pending state from the form; a click action is told when
// it is running (`busy`), so neither ever looks dead while it works.
export function FormActionsPrimary(props) {
  const { onConfirm, label, tone, size, busy, disabled } = props

  if (onConfirm)
    return (
      <Button tone={tone} size={size} loading={busy} disabled={disabled}
        onClick={onConfirm}>{label}</Button>
    )

  return (
    <SubmitButton tone={tone} size={size} disabled={disabled}>
      {label}
    </SubmitButton>
  )
}
