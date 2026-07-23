'use client'

import { Stack } from '@/ui/layout/Stack'
import { ContactHeader } from './ContactHeader'
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
      <ContactHeader contact={contact} onChanged={onChanged}
        googleLink={sections.googleLink}
        portalMember={sections.portalMember} act={act} />
      <TotalSpent spend={sections.spend} />
      <ContactChannels contact={contact} onChanged={onChanged} />
      <ContactSections contactId={id} sections={sections} act={act} />
      <Timeline entries={sections.timeline} />
    </Stack>
  )
}
