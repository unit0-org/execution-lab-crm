import { Form } from '@/ui/Form'
import { Field } from '@/ui/Field'
import { Select } from '@/ui/Select'
import { SubmitButton } from '@/ui/SubmitButton'
import { linkMeeting } from '../actions'

const optionLabel = (m) =>
  `${m.title || 'Untitled meeting'} — ${new Date(m.started_at).toLocaleDateString()}`

export function LinkMeetingForm({ contactId, meetings }) {
  if (meetings.length === 0) return null

  return (
    <Form action={linkMeeting}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Field htmlFor="meeting_id" label="Link a past meeting">
        <Select id="meeting_id" name="meeting_id" defaultValue="" required>
          <option value="" disabled>Select a meeting…</option>
          {meetings.map((m) => (
            <option key={m.id} value={m.id}>{optionLabel(m)}</option>
          ))}
        </Select>
      </Field>
      <SubmitButton tone="primary" size="sm">Link meeting</SubmitButton>
    </Form>
  )
}
