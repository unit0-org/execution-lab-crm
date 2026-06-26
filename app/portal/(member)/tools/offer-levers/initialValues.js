import context from './data/offerContext.json'
import levers from './data/offerLevers.json'

// Context fields start blank; each lever defaults to its first option (what
// a native <select> would show selected), so the prompt is never empty.
const blanks = Object.fromEntries(context.map((f) => [f.id, '']))
const defaults = Object.fromEntries(levers.map((l) => [l.id, l.options[0]]))

export const initialValues = { ...blanks, ...defaults }
