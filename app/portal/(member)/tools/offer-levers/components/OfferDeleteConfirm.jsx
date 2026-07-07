import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'

// Delete-offer confirmation; hidden until an offer is pending.
export function OfferDeleteConfirm({ offer, onConfirm, onCancel }) {
  const name = offer?.name || 'This offer'

  return (
    <ConfirmDialog open={Boolean(offer)} title="Delete offer?"
      message={`"${name}" and its inputs will be permanently deleted.`}
      onConfirm={onConfirm} onCancel={onCancel} />
  )
}
