'use client'

import { Modal } from '@/ui/organisms/Modal'
import { SendInvoicesReview } from './SendInvoicesReview'

export function SendInvoicesModal({ flow }) {
  const drafts = flow.drafts || []

  return (
    <Modal open={!!flow.drafts} onClose={flow.cancel} wide>
      <SendInvoicesReview drafts={drafts} sending={flow.sending}
        onEdit={flow.edit} onConfirm={flow.confirm} onCancel={flow.cancel} />
    </Modal>
  )
}
