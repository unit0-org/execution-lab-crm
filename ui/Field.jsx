import { Label } from './Label'
import { fieldStyle } from './Field.styles'

export function Field({ htmlFor, label, children }) {
  return (
    <div style={fieldStyle}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  )
}
