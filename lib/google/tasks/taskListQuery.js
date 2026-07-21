// Query for listing a task list. Includes completed, hidden and deleted
// tasks so completions and deletions are caught; updatedMin makes it
// incremental after the first run.
export function taskListQuery(updatedMin, pageToken) {
  const q = new URLSearchParams({
    showCompleted: 'true', showHidden: 'true',
    showDeleted: 'true', maxResults: '100'
  })

  if (updatedMin) q.set('updatedMin', updatedMin)

  if (pageToken) q.set('pageToken', pageToken)

  return q
}
