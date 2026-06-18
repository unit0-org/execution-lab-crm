'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { AcceptComposer } from './AcceptComposer'
import { AcceptActions } from './AcceptActions'

// The reviewable payment email shown before it's sent to an applicant
// being accepted off the waitlist.
export function AcceptReview({ flow }) {
  return (
    <Stack gap="md">
      <Heading level={2}>Send payment email</Heading>
      <AcceptComposer draft={flow.draft} onEdit={flow.edit} />
      <AcceptActions sending={flow.sending} onSend={flow.send}
        onCancel={flow.cancel} />
    </Stack>
  )
}
