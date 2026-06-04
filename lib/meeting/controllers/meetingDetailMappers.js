import { attachmentKind } from './attachmentKind'

const nameOf = (p) => {
  const c = p.contact || {}
  const full = [c.first_name, c.last_name].filter(Boolean).join(' ')

  return full || p.email || 'Unknown'
}

export const toParticipant = (p) =>
  ({ id: p.contact_id, pid: p.id, name: nameOf(p) })

export const toResource = (a) => ({
  id: a.id, title: a.title || 'Untitled', url: a.url, kind: attachmentKind(a)
})

export const toNote = (n) =>
  ({ id: n.id, body: n.body, created_at: n.created_at })
