import { formStyle } from './Form.styles'

export function Form({ action, children }) {
  return <form action={action} style={formStyle}>{children}</form>
}
