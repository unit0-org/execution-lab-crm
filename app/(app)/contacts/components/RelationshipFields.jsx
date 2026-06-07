'use client'

import { Stack } from '@/ui/layout/Stack'
import { ContactAutocomplete } from './ContactAutocomplete'
import { RelTypeField } from './RelTypeField'
import { RelHiddenInputs } from './RelHiddenInputs'

export function RelationshipFields(props) {
  const { contactId, contact, onContact, rel, onRel } = props

  return (
    <Stack gap="md">
      <ContactAutocomplete label="Related contact" value={contact}
        onChange={onContact} allowCreate />
      <RelTypeField value={rel} onChange={onRel} />
      <RelHiddenInputs contactId={contactId} contact={contact} rel={rel} />
    </Stack>
  )
}
