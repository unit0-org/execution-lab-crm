import context from './data/offerContext.json'
import levers from './data/offerLevers.json'
import outputs from './data/offerOutputs.json'
import { fieldValue } from './fieldValue'
import { asLeverText } from './leverStorage'

const outputType = outputs[0].inputType
const contextRow = (values, lists) => (f) =>
  ({ label: f.label, value: fieldValue(f, values, lists) })
const leverRow = (values) => (l) =>
  ({ label: l.label, value: asLeverText(values[l.id]).trim() })

// Context rows carrying a value (blank fields are dropped for a clean doc).
export const contextRows = (values, lists) =>
  context.map(contextRow(values, lists)).filter((r) => r.value)

// One row per lever — all 15, since each carries a default setting.
export const leverRows = (values) => levers.map(leverRow(values))

// The pasted-back AI offers, in entry order, non-empty only.
export const generatedBlocks = (lists) =>
  (lists[outputType] || []).map((r) => r.value.trim()).filter(Boolean)
