'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { WaitlistDetailBody } from './WaitlistDetailBody'
import { AcceptBar } from './AcceptBar'
import { AcceptPreviewModal } from './AcceptPreviewModal'
import { useAcceptFlow } from '../hooks/useAcceptFlow'

// What a waitlist applicant submitted, with an action to accept them into
// their cohort and email the reviewed payment link.
export function WaitlistDetail({ entry, cohorts, onClose }) {
  const flow = useAcceptFlow(onClose)

  return (
    <>
      <Modal open={Boolean(entry)} onClose={onClose}>
        <Stack gap="lg">
          <WaitlistDetailBody entry={entry} />
          <AcceptBar key={entry?.id} entry={entry} cohorts={cohorts}
            onAccept={flow.start} />
        </Stack>
      </Modal>
      <AcceptPreviewModal flow={flow} />
    </>
  )
}
