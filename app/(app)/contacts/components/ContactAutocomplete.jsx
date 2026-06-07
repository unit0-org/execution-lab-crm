'use client'

import { Inline } from '@/ui/layout/Inline'
import { Combobox } from '@/ui/molecules/Combobox'
import { useContactAutocomplete } from '../hooks/useContactAutocomplete'
import { QuickCreateControl } from './QuickCreateControl'

export function ContactAutocomplete({ label, value, onChange, allowCreate }) {
  const field = useContactAutocomplete(value, onChange)

  return (
    <Inline gap="sm">
      <Combobox label={label} value={field.query} hint="Search contacts"
        onChange={field.onType} options={field.options}
        onPick={field.onPick} />
      <QuickCreateControl allowCreate={allowCreate} quick={field.quick} />
    </Inline>
  )
}
