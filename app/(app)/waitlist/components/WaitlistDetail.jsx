import { Modal } from '@/ui/organisms/Modal'
import { WaitlistDetailBody } from './WaitlistDetailBody'

// What a waitlist applicant submitted on the portal form, in a modal.
export function WaitlistDetail({ entry, onClose }) {
  return (
    <Modal open={Boolean(entry)} onClose={onClose}>
      <WaitlistDetailBody entry={entry} />
    </Modal>
  )
}
