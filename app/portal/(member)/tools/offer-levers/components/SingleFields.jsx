import { ContextField } from './ContextField'
import fields from '../data/offerContext.json'

const singles = fields.filter((f) => !f.repeatable)

// The three single-valued context inputs (seed, audience, primary outcome).
export function SingleFields({ values, saved, onField }) {
  return singles.map((field) => (
    <ContextField key={field.id} field={field}
      value={values[field.inputType]} onChange={onField(field.inputType)}
      saved={saved[field.inputType]} />
  ))
}
