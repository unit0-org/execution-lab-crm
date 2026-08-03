'use client'

import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { Autocomplete } from '@/ui/molecules/Autocomplete'
import { FormActions } from '@/ui/molecules/FormActions'
import { useReservePerson } from '../hooks/useReservePerson'
import { toReservePerson } from './toReservePerson'

// Who the seat is for. Picking an existing contact fills the fields in;
// someone not in the CRM yet is simply typed, and reserving creates them.
export function ReservePersonForm({ contacts, onContinue, onCancel }) {
  const who = useReservePerson()

  return (
    <Stack gap="md">
      <Autocomplete label="Existing contact" value={who.query}
        onType={who.onType} options={contacts} onPick={who.pick}
        hint="Optional — search by name or email" />
      <TextField label="Full name" value={who.person.name}
        onChange={who.set('name')} />
      <TextField label="Email" value={who.person.email}
        onChange={who.set('email')} />
      <FormActions label="Continue" disabled={!who.ready} onCancel={onCancel}
        onConfirm={() => onContinue(toReservePerson(who.person))} />
    </Stack>
  )
}
