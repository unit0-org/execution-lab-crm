import { requiredMarkStyle } from './RequiredMark.styles'

/**
 * The `*` that flags a required field, rendered by `FieldLabel`. Hidden
 * from screen readers — the input's own `required` already conveys it.
 */
export function RequiredMark() {
  return <span style={requiredMarkStyle} aria-hidden="true">*</span>
}
