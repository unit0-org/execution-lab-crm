import { Stack } from '@/ui/Stack'
import { Inline } from '@/ui/Inline'
import { Form } from '@/ui/Form'
import { InlineForm } from '@/ui/InlineForm'
import { Textarea } from '@/ui/Textarea'
import { SubmitButton } from '@/ui/SubmitButton'
import { SnoozeMenu } from './SnoozeMenu'
import { submitMeetingNotes, dismissMeetingDocumentation, snoozeMeetingDocumentation } from '../../actions/documentMeeting'

export function DocumentMeetingForm({ meetingId }) {
  return (
    <Form action={submitMeetingNotes}>
      <input type="hidden" name="meeting_id" value={meetingId} />
      <Stack gap="sm">
        <Textarea name="notes" rows={4} required />
        <Inline gap="md" justify="space-between">
          <Inline gap="md">
            <SubmitButton tone="primary" size="sm">Save</SubmitButton>
            <InlineForm action={dismissMeetingDocumentation}>
              <input type="hidden" name="meeting_id" value={meetingId} />
              <SubmitButton size="sm">Skip</SubmitButton>
            </InlineForm>
          </Inline>
          <SnoozeMenu action={snoozeMeetingDocumentation} idValue={meetingId} />
        </Inline>
      </Stack>
    </Form>
  )
}
