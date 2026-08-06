'use client'

import { Modal } from '@/ui/organisms/Modal'
import { SendInvoicesReview } from './SendInvoicesReview'

export function SendInvoicesModal({ flow }) {
  const drafts = flow.drafts || []

  return (
    <Modal open={!!flow.drafts} onClose={flow.cancel} wide>
      <SendInvoicesReview drafts={drafts} progress={flow.progress}
        sending={flow.sending} onEdit={flow.edit} onSend={flow.send}
        onCancel={flow.cancel} />
    </Modal>
  )
}
