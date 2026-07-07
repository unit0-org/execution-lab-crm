import context from './data/offerContext.json'
import outputs from './data/offerOutputs.json'
import levers from './data/offerLevers.json'

// The valid input_type values, split by cardinality. Actions validate
// against these so a client can't store an arbitrary type.
export const repeatableFields = context.filter((f) => f.repeatable)

export const outputFields = outputs

export const addMoreOptions = repeatableFields.map((f) => ({
  value: f.inputType, label: f.label
}))

const repeatableTypes = [
  ...repeatableFields.map((f) => f.inputType),
  ...outputs.map((f) => f.inputType)
]

export const singleTypes = [
  ...context.filter((f) => !f.repeatable).map((f) => f.inputType),
  ...levers.map((l) => l.id)
]

export const isRepeatableType = (type) => repeatableTypes.includes(type)
export const isSingleType = (type) => singleTypes.includes(type)
