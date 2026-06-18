'use client'

import { Modal } from '@/ui/organisms/Modal'
import { AcceptReview } from './AcceptReview'

// The acceptance payment-email preview, in a modal over the detail view.
export function AcceptPreviewModal({ flow }) {
  return (
    <Modal open={Boolean(flow.draft)} onClose={flow.cancel} wide>
      <AcceptReview flow={flow} />
    </Modal>
  )
}
