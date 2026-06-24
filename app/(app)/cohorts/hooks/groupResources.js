const SESSION_FALLBACK = 'General'

const sessionKey = (r) => r.session_label || SESSION_FALLBACK

// Group resources into ordered sessions (first-seen order — the list
// arrives sorted by session_label then created_at). Each session keeps its
// items; the view splits them by kind.
export function groupResources(resources) {
  const byLabel = {}
  const sessions = []

  resources.forEach((resource) => {
    const label = sessionKey(resource)

    if (!byLabel[label]) {
      byLabel[label] = { label, items: [] }
      sessions.push(byLabel[label])
    }

    byLabel[label].items.push(resource)
  })

  return sessions
}
