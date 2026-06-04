'use client'

import { Stack } from '@/ui/layout/Stack'
import { PhoneHeader } from './PhoneHeader'
import { PhoneRow } from './PhoneRow'
import { AddPhoneSlot } from './AddPhoneSlot'
import { useReveal } from '../hooks/useReveal'

export function PhoneEditor({ contactId, phones, onChanged }) {
  const add = useReveal()

  const saved = () => {
    onChanged()
    add.hide()
  }

  return (
    <Stack gap="md">
      <PhoneHeader onAdd={add.show} />
      {phones.map((p) => (
        <PhoneRow key={p.id} phone={p} onChanged={onChanged} />
      ))}
      <AddPhoneSlot shown={add.shown} contactId={contactId}
        onSaved={saved} onCancel={add.hide} />
    </Stack>
  )
}
