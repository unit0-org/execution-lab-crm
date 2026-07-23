import { fixKey } from './fixKey'

// Add or remove a key from a Set, immutably.
export function flip(keys, key) {
  const next = new Set(keys)

  if (next.has(key)) next.delete(key)
  else next.add(key)

  return next
}

// The selected fixes, as apply targets (type + id only).
export function chosenTargets(list, keys) {
  return list
    .filter((fix) => keys.has(fixKey(fix)))
    .map((fix) => ({ type: fix.type, id: fix.id }))
}

// The fixes left after the selected ones are applied.
export function remaining(list, keys) {
  return list.filter((fix) => !keys.has(fixKey(fix)))
}
