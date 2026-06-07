'use client'

import { Autocomplete } from '@/ui/molecules/Autocomplete'
import { useRelTypeField } from '../hooks/useRelTypeField'

export function RelTypeField({ value, onChange }) {
  const field = useRelTypeField(value, onChange)

  return (
    <Autocomplete label="Relationship" value={field.query}
      hint="Type or pick (e.g. married to)" onType={field.onType}
      options={field.options} onPick={field.onPick} />
  )
}
