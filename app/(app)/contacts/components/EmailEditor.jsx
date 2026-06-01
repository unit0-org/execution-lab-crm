import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { EmailRow } from './EmailRow'
import { AddEmail } from './AddEmail'

export function EmailEditor({ contactId, emails, onChanged }) {
  return (
    <Stack gap="md">
      <Text size="sm" tone="muted">Emails</Text>
      {emails.map((e) => (
        <EmailRow key={e.id} email={e} onChanged={onChanged} />
      ))}
      <AddEmail contactId={contactId} onChanged={onChanged} />
    </Stack>
  )
}
