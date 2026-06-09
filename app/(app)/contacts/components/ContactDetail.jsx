import { Stack } from '@/ui/layout/Stack'
import { ContactHeader } from './ContactHeader'
import { TotalSpent } from './TotalSpent'
import { ContactChannels } from './ContactChannels'
import { ContactAnswers } from './ContactAnswers'
import { ContactNotes } from './ContactNotes'
import { ContactRelationships } from './ContactRelationships'
import { Timeline } from './Timeline'

export function ContactDetail({ contact, onChanged }) {
  const id = contact.id

  return (
    <Stack gap="lg">
      <ContactHeader contact={contact} onChanged={onChanged} />
      <TotalSpent contactId={id} />
      <ContactChannels contact={contact} onChanged={onChanged} />
      <ContactAnswers contactId={id} />
      <ContactNotes contactId={id} />
      <ContactRelationships contactId={id} />
      <Timeline contactId={id} />
    </Stack>
  )
}
