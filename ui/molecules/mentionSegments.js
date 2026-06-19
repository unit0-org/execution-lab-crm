const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const byLengthDesc = (a, b) => b.length - a.length

// Split note text into plain runs and picked @-mention runs (for pills).
export function mentionSegments(value, labels) {
  const names = labels.map((l) => `@${l}`).sort(byLengthDesc)

  if (!names.length) return [{ text: value, mention: false }]

  const re = new RegExp(`(${names.map(escape).join('|')})`, 'g')
  const set = new Set(names)

  return value
    .split(re)
    .filter(Boolean)
    .map((text) => ({ text, mention: set.has(text) }))
}
