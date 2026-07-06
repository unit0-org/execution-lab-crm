import context from './data/offerContext.json'
import levers from './data/offerLevers.json'

// The valid input_type values, split by cardinality. Actions validate
// against these so a client can't store an arbitrary type.
export const repeatableFields = context.filter((f) => f.repeatable)

export const repeatableTypes = repeatableFields.map((f) => f.inputType)

export const addMoreOptions = repeatableFields.map((f) => ({
  value: f.inputType, label: f.label
}))

export const singleTypes = [
  ...context.filter((f) => !f.repeatable).map((f) => f.inputType),
  ...levers.map((l) => l.id)
]

export const isRepeatableType = (type) => repeatableTypes.includes(type)
export const isSingleType = (type) => singleTypes.includes(type)
