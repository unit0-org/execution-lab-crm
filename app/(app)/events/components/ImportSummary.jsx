import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { SummaryLine } from './SummaryLine'

export function ImportSummary({ result }) {
  const lines = [
    { label: 'Guests in file', value: result.guests },
    { label: 'Contacts created', value: result.contactsCreated },
    { label: 'New participants', value: result.participantsCreated },
    { label: 'Event created', value: result.eventCreated ? 'Yes' : 'No' }
  ]

  return (
    <Stack gap="sm">
      <Heading level={2}>Imported</Heading>
      {lines.map((line) => <SummaryLine key={line.label} {...line} />)}
    </Stack>
  )
}
