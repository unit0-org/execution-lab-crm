'use client'

import { Autocomplete } from '@/ui/molecules/Autocomplete'
import { useContactAutocomplete } from '../hooks/useContactAutocomplete'
import { QuickContactForm } from './QuickContactForm'

export function ContactAutocomplete({ label, value, onChange, allowCreate }) {
  const field = useContactAutocomplete(value, onChange, allowCreate)

  return (
    <>
      <Autocomplete label={label} value={field.query} hint="Search contacts"
        onType={field.onType} options={field.options} onPick={field.onPick}
        onCreate={field.onCreate} createLabel="contact" />
      <QuickContactForm quick={field.quick} />
    </>
  )
}
