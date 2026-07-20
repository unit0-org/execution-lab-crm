import { EndRow } from '../layout/EndRow'
import { Button } from '../atoms/Button'
import { SubmitButton } from '../atoms/SubmitButton'

function CancelButton({ onCancel, label, size }) {
  if (!onCancel) return null

  return <Button size={size} onClick={onCancel}>{label}</Button>
}

function PrimaryAction({ onConfirm, label, tone, size }) {
  if (onConfirm)
    return <Button tone={tone} size={size} onClick={onConfirm}>{label}</Button>

  return <SubmitButton tone={tone} size={size}>{label}</SubmitButton>
}

/**
 * The one form/dialog action row: a primary button — a submit by default, or
 * an `onConfirm` click action — with an optional Cancel, aligned to the RIGHT
 * so every form and modal places its buttons the same way.
 */
export function FormActions(props) {
  const { label = 'Save', tone = 'primary', size = 'sm' } = props
  const { onCancel, cancelLabel = 'Cancel', onConfirm } = props

  return (
    <EndRow>
      <CancelButton onCancel={onCancel} label={cancelLabel} size={size} />
      <PrimaryAction onConfirm={onConfirm} label={label} tone={tone}
        size={size} />
    </EndRow>
  )
}
