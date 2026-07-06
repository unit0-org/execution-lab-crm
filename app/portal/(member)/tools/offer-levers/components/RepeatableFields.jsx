import { RepeatableInputs } from './RepeatableInputs'
import { repeatableFields } from '../offerInputTypes'

// Each repeatable type's current inputs (nothing until one is added).
export function RepeatableFields({ lists, saved, onUpdate, onRemove }) {
  return repeatableFields.map((field) => (
    <RepeatableInputs key={field.id} field={field}
      items={lists[field.inputType]} saved={saved}
      onUpdate={onUpdate} onRemove={onRemove} />
  ))
}
