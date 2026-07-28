import { EndRow } from '../layout/EndRow'
import { FormActionsCancel } from './FormActionsCancel'
import { FormActionsPrimary } from './FormActionsPrimary'

/**
 * The one form/dialog action row: a primary button — a submit by default, or
 * an `onConfirm` click action — with an optional Cancel, aligned to the RIGHT
 * so every form and modal places its buttons the same way. `busy` spins the
 * primary while the action runs, `disabled` holds it until there is something
 * to submit, and `extra` slots one more control beside it (e.g. "send all").
 */
export function FormActions(props) {
  const { label = 'Save', tone = 'primary', size = 'sm' } = props
  const { onCancel, cancelLabel = 'Cancel', onConfirm } = props
  const { busy, disabled, extra } = props

  return (
    <EndRow>
      <FormActionsCancel onCancel={onCancel} label={cancelLabel} size={size} />
      {extra}
      <FormActionsPrimary onConfirm={onConfirm} label={label} tone={tone}
        size={size} busy={busy} disabled={disabled} />
    </EndRow>
  )
}
