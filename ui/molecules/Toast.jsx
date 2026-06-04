import { toastStyle } from './Toast.styles'

// A single transient notification pill.
export function Toast({ message }) {
  return <div style={toastStyle}>{message}</div>
}
