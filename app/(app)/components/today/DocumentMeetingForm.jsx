import { Stack } from '@/ui/Stack'
import { Inline } from '@/ui/Inline'
import { Form } from '@/ui/Form'
import { InlineForm } from '@/ui/InlineForm'
import { Textarea } from '@/ui/Textarea'
import { Button } from '@/ui/Button'
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
            <Button type="submit" tone="primary" size="sm">Save</Button>
            <InlineForm action={dismissMeetingDocumentation}>
              <input type="hidden" name="meeting_id" value={meetingId} />
              <Button type="submit" size="sm">Skip</Button>
            </InlineForm>
          </Inline>
          <SnoozeMenu action={snoozeMeetingDocumentation} idValue={meetingId} />
        </Inline>
      </Stack>
    </Form>
  )
}
