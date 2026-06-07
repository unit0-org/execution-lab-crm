'use client'

import { Inline } from '@/ui/layout/Inline'
import { Combobox } from '@/ui/molecules/Combobox'
import { Button } from '@/ui/atoms/Button'
import { useClientField } from '../hooks/useClientField'
import { QuickContactForm } from './QuickContactForm'

export function ClientField({ client, onChange }) {
  const field = useClientField(client, onChange)

  return (
    <Inline gap="sm">
      <Combobox label="Client" value={field.query} hint="Search contacts"
        onChange={field.onType} options={field.options}
        onPick={field.onPick} />
      <Button onClick={field.quick.modal.show}>New contact</Button>
      <QuickContactForm quick={field.quick} />
    </Inline>
  )
}
