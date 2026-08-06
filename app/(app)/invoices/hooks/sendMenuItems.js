// The Send button's menu: the invoice on screen, or the whole batch. One
// invoice has no batch to offer, so it gets no caret at all.
export function sendMenuItems(drafts, onSendAll, onSendOne) {
  if (drafts.length < 2) return null

  return [
    {
      label: 'Send this one',
      hint: 'Only the invoice you are looking at',
      onClick: onSendOne
    },
    {
      label: `Send all ${drafts.length}`,
      hint: 'Every invoice in this batch, one after another',
      onClick: () => onSendAll(drafts)
    }
  ]
}
