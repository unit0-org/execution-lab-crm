import { Button } from '../atoms/Button'

// The row's optional Cancel — internal to FormActions, not public API.
export function FormActionsCancel({ onCancel, label, size }) {
  if (!onCancel) return null

  return <Button size={size} onClick={onCancel}>{label}</Button>
}
