const FALLBACK = 'General'

// Group ordered resources into sessions (first-seen order — the list
// arrives sorted by session_label then created_at), each holding its
// items. The view splits a session's items by kind. Shared by the admin
// list and the portal page.
export function groupResourcesBySession(resources) {
  const byLabel = {}
  const sessions = []

  resources.forEach((resource) => {
    const label = resource.session_label || FALLBACK

    if (!byLabel[label]) {
      byLabel[label] = { label, items: [] }
      sessions.push(byLabel[label])
    }

    byLabel[label].items.push(resource)
  })

  return sessions
}
