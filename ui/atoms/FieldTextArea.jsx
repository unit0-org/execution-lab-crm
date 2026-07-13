import { fieldTextAreaStyle } from './FieldTextArea.styles'

/**
 * Dark portal textarea (label it with `Field`/`FieldArea`); pass
 * name/rows/etc. through.
 */
export function FieldTextArea({ rows = 3, ...rest }) {
  return <textarea rows={rows} style={fieldTextAreaStyle} {...rest} />
}
