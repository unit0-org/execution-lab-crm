import levers from './data/offerLevers.json'

const multiIds = new Set(levers.filter((l) => l.multi).map((l) => l.id))

export const isMultiLever = (id) => multiIds.has(id)

export const asLeverText = (value) =>
  Array.isArray(value) ? value.join(', ') : value || ''

// Multi levers persist their picked array as JSON in the TEXT value column.
export function toStored(id, value) {
  if (!isMultiLever(id)) return value

  return JSON.stringify(value)
}

// Read a stored value back into client shape: an array for multi levers,
// upgrading any legacy scalar row to a single-item array.
export function fromStored(id, value) {
  if (!isMultiLever(id)) return value

  try {
    const parsed = JSON.parse(value)

    return Array.isArray(parsed) ? parsed : [value]
  } catch {
    return value ? [value] : []
  }
}
