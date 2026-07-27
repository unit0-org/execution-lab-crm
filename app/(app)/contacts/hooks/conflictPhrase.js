// The conflicting field labels as prose: "name", "name and photo",
// "name, LinkedIn and photo".
export function conflictPhrase(conflicts) {
  const labels = conflicts.map((conflict) => conflict.label)
  const last = labels.pop()

  if (!labels.length) return last

  return `${labels.join(', ')} and ${last}`
}
