import { spinnerStyle } from './Spinner.styles'

/** Inline loading spinner. */
export function Spinner({ size = 14 }) {
  return <span aria-hidden style={spinnerStyle(size)} />
}
