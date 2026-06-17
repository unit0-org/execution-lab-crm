const btn = (label, tone, onClick) => ({ label, tone, onClick })

const voidBtn = (h) => btn('Void', 'danger', h.voidIt)

const sendable = (h) => [
  btn('Send', 'primary', h.send),
  btn('Mark paid', 'default', h.paid),
  voidBtn(h)
]

// The action buttons available for an invoice in a given status.
export function actionsForStatus(status, h) {
  if (status === 'draft')
    return [btn('Approve', 'primary', h.approve), voidBtn(h)]

  if (status === 'approved') return sendable(h)

  if (status === 'sent') return sendable(h)

  if (status === 'paid')
    return [btn('Send', 'primary', h.send), voidBtn(h)]

  return []
}
