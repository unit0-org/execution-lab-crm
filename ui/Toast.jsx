import { toastStyle } from './Toast.styles'

export function Toast({ tone = 'success', children }) {
  return <div style={toastStyle(tone)}>{children}</div>
}
