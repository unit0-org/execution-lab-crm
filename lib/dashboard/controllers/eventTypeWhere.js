// Narrow the funnel to one event type; no type means every type.
export function eventTypeWhere(type) {
  if (!type) return undefined

  return { name: type }
}
