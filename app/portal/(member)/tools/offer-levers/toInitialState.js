import { isRepeatableType } from './offerInputTypes'
import { fromStored } from './leverStorage'

// Group saved rows into single values (keyed by input_type) and repeatable
// lists (input_type -> [{ id, value }]), matching the client state shape.
export function toInitialState(rows) {
  const singles = {}
  const lists = {}

  for (const row of rows || []) {
    if (!isRepeatableType(row.input_type)) {
      singles[row.input_type] = fromStored(row.input_type, row.value)
      continue
    }

    const list = lists[row.input_type] || []

    list.push({ id: row.id, value: row.value })
    lists[row.input_type] = list
  }

  return { singles, lists }
}
