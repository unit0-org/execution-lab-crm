'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { EmailComposerFields } from './EmailComposerFields'
import { FormActions } from '@/ui/molecules/FormActions'

// The email that reserves the seat, read and edited before it goes out —
// this is where a personal note gets added. Sending is what commits the
// reservation, so the wording and the seat are decided together.
export function ReserveEmailReview({ flow }) {
  return (
    <Stack gap="md">
      <Text tone="muted" size={13}>
        Sending this reserves the seat and holds it for them.
      </Text>
      <EmailComposerFields draft={flow.draft} onEdit={flow.edit} />
      <FormActions label="Reserve seat & send" busy={flow.busy}
        onCancel={flow.back} onConfirm={flow.send} />
    </Stack>
  )
}
