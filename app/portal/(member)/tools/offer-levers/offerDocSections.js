import context from './data/offerContext.json'
import levers from './data/offerLevers.json'
import outputs from './data/offerOutputs.json'
import { fieldValue } from './fieldValue'
import { asLeverText } from './leverStorage'

const outputType = outputs[0].inputType
const contextRow = (values, lists) => (f) =>
  ({ label: f.label, value: fieldValue(f, values, lists) })
const leverPair = (values) => (l) =>
  [l.label, asLeverText(values[l.id]).trim()]
const toBlock = (r) => ({ text: r.value.trim(), active: Boolean(r.active) })

// Context rows carrying a value (blank fields are dropped for a clean doc).
export const contextRows = (values, lists) =>
  context.map(contextRow(values, lists)).filter((r) => r.value)

// The 15 levers as [label, setting] pairs for a two-column table.
export const leverTable = (values) =>
  ({ rows: levers.map(leverPair(values)) })

// The pasted-back AI offers, each flagged active or not; non-empty only.
export const generatedBlocks = (lists) =>
  (lists[outputType] || []).map(toBlock).filter((b) => b.text)
