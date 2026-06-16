'use client'

import { Stack } from '@/ui/layout/Stack'
import { ContactHeader } from './ContactHeader'
import { ContactActivityBar } from './ContactActivityBar'
import { TotalSpent } from './TotalSpent'
import { ContactChannels } from './ContactChannels'
import { ContactSections } from './ContactSections'
import { Timeline } from './Timeline'
import { useContactActivity } from '../hooks/useContactActivity'

export function ContactDetail({ contact, onChanged, sections }) {
  const id = contact.id
  const act = useContactActivity()

  return (
    <Stack gap="lg">
      <ContactHeader contact={contact} onChanged={onChanged} />
      <ContactActivityBar act={act} />
      <TotalSpent contactId={id} />
      <ContactChannels contact={contact} onChanged={onChanged} />
      <ContactSections contactId={id} sections={sections} act={act} />
      <Timeline entries={sections.timeline} />
    </Stack>
  )
}
