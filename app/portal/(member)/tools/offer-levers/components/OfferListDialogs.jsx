import { OfferDeleteConfirm } from './OfferDeleteConfirm'
import { ShareOfferModal } from './ShareOfferModal'

// The dialogs an offer card's menu opens: the delete confirm and the share
// dialog. Both are hidden until their offer is set.
export function OfferListDialogs({ dialogs }) {
  return (
    <>
      <OfferDeleteConfirm offer={dialogs.pending}
        onConfirm={dialogs.confirmRemove} onCancel={dialogs.cancelRemove} />
      <ShareOfferModal offer={dialogs.sharing} onClose={dialogs.closeShare} />
    </>
  )
}
