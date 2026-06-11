import { fieldInputStyle } from './FieldInput.styles'

// Dark portal text input. Labelled via Field; pass name/type/etc. through.
export function FieldInput(props) {
  return <input style={fieldInputStyle} {...props} />
}
