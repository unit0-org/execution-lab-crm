const summary = (meeting) => ({
  id: meeting.id,
  title: meeting.title,
  starts_at: meeting.starts_at
})

// Shape a suggestion row for the UI: the pair plus each side's summary.
export function toSuggestion(row) {
  return {
    id: row.id,
    manual: summary(row.manual),
    google: summary(row.google)
  }
}
