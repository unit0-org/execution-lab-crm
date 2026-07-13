import { fieldInputStyle } from './FieldInput.styles'

/**
 * Dark portal text input (label it with `Field`/`FieldText`); pass
 * name/type/etc. through.
 */
export function FieldInput(props) {
  return <input style={fieldInputStyle} {...props} />
}
