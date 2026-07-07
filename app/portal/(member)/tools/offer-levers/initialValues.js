import context from './data/offerContext.json'
import levers from './data/offerLevers.json'

// Single-valued fields keyed by input_type start blank (repeatables live in
// separate list state); each lever defaults to its first option, so the
// prompt is never empty. Multi levers default to a one-item array.
const singles = context.filter((f) => !f.repeatable)
const blanks = Object.fromEntries(singles.map((f) => [f.inputType, '']))
const leverDefault = (l) => (l.multi ? [l.options[0]] : l.options[0])
const defaults = Object.fromEntries(levers.map((l) => [l.id, leverDefault(l)]))

export const initialValues = { ...blanks, ...defaults }
