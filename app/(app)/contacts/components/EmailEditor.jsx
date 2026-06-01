'use client'

import { Stack } from '@/ui/layout/Stack'
import { EmailHeader } from './EmailHeader'
import { EmailRow } from './EmailRow'
import { AddEmailSlot } from './AddEmailSlot'
import { useReveal } from '../hooks/useReveal'

export function EmailEditor({ contactId, emails, onChanged }) {
  const add = useReveal()

  const saved = () => {
    onChanged()
    add.hide()
  }

  return (
    <Stack gap="md">
      <EmailHeader onAdd={add.show} />
      {emails.map((e) => (
        <EmailRow key={e.id} email={e} onChanged={onChanged} />
      ))}
      <AddEmailSlot shown={add.shown} contactId={contactId}
        onSaved={saved} onCancel={add.hide} />
    </Stack>
  )
}
