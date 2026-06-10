import { requiredMarkStyle } from './RequiredMark.styles'

// The asterisk that flags a required field. Hidden from screen readers —
// the input's own `required` already conveys it.
export function RequiredMark() {
  return <span style={requiredMarkStyle} aria-hidden="true">*</span>
}
