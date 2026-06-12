'use client'

import { Modal } from '@/ui/organisms/Modal'
import { SendInvoicesReview } from './SendInvoicesReview'

export function SendInvoicesModal({ flow }) {
  const previews = flow.previews || []

  return (
    <Modal open={!!flow.previews} onClose={flow.cancel}>
      <SendInvoicesReview previews={previews} sending={flow.sending}
        onConfirm={flow.confirm} onCancel={flow.cancel} />
    </Modal>
  )
}
