const gap = (suggestion) =>
  Math.abs(
    new Date(suggestion.google.starts_at)
      - new Date(suggestion.manual.starts_at)
  )

// Keep one suggestion per manual meeting: the Google occurrence closest in
// time. A recurring series expands to many occurrences that all match one
// hand-made meeting by title, so without this they fan out into dozens of
// identical cards.
export function closestSuggestionPerManual(suggestions) {
  const best = new Map()

  for (const suggestion of suggestions) {
    const chosen = best.get(suggestion.manual.id)

    if (!chosen || gap(suggestion) < gap(chosen))
      best.set(suggestion.manual.id, suggestion)
  }

  return [...best.values()]
}
