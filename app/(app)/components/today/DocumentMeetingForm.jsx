import { Stack } from '@/ui/Stack'
import { Inline } from '@/ui/Inline'
import { FeedbackForm } from '@/ui/FeedbackForm'
import { SubmitButton } from '@/ui/SubmitButton'
import { Textarea } from '@/ui/Textarea'
import { SnoozeMenu } from './SnoozeMenu'
import { submitMeetingNotes, dismissMeetingDocumentation, snoozeMeetingDocumentation } from '../../actions/documentMeeting'

const HiddenId = ({ value }) => <input type="hidden" name="meeting_id" value={value} />

export function DocumentMeetingForm({ meetingId }) {
  return (
    <Stack gap="sm">
      <FeedbackForm action={submitMeetingNotes} success="Notes saved.">
        <Stack gap="sm">
          <HiddenId value={meetingId} />
          <Textarea name="notes" rows={4} required />
          <SubmitButton tone="primary" size="sm">Save</SubmitButton>
        </Stack>
      </FeedbackForm>
      <Inline gap="md" justify="space-between">
        <FeedbackForm action={dismissMeetingDocumentation} success="Skipped." display="inline">
          <HiddenId value={meetingId} />
          <SubmitButton size="sm">Skip</SubmitButton>
        </FeedbackForm>
        <SnoozeMenu action={snoozeMeetingDocumentation} idValue={meetingId} />
      </Inline>
    </Stack>
  )
}
