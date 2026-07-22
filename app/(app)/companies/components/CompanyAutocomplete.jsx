'use client'

import { Autocomplete } from '@/ui/molecules/Autocomplete'
import { useCompanyAutocomplete } from '../hooks/useCompanyAutocomplete'

// Typeahead over companies for the invoice client picker.
export function CompanyAutocomplete({ label, value, onChange }) {
  const field = useCompanyAutocomplete(value, onChange)

  return (
    <Autocomplete label={label} value={field.query} hint="Search companies"
      onType={field.onType} options={field.options} onPick={field.onPick} />
  )
}
