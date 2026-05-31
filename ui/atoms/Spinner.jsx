import { spinnerStyle } from './Spinner.styles'

export function Spinner({ size = 14 }) {
  return <span aria-hidden style={spinnerStyle(size)} />
}
