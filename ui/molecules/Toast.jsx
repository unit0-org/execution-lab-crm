import { toastStyle } from './Toast.styles'

/** Transient feedback pill (raise one with `showToast`). */
export function Toast({ message }) {
  return <div style={toastStyle}>{message}</div>
}
