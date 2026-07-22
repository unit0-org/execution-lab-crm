'use client'

import { useState } from 'react'
import { useCompanyOptions } from './useCompanyOptions'

export function useCompanyAutocomplete(value, onChange) {
  const [query, setQuery] = useState(value.name)
  const options = useCompanyOptions()

  const onType = (text) => {
    setQuery(text)
    onChange({ companyId: null, name: text, email: '', address: '' })
  }
  const select = (option) => {
    setQuery(option.label)
    onChange({ companyId: option.value, name: option.label,
      email: option.email, address: option.address })
  }

  return { query, options, onType, onPick: select }
}
