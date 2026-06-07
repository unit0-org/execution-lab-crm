'use client'

import { useState } from 'react'
import { useContactOptions } from './useContactOptions'
import { useQuickContact } from './useQuickContact'

export function useContactAutocomplete(value, onChange, allowCreate) {
  const [query, setQuery] = useState(value.name)

  const onType = (text) => {
    setQuery(text)
    onChange({ contactId: null, name: text, email: '' })
  }
  const select = (option) => {
    setQuery(option.label)
    onChange({ contactId: option.value, name: option.label,
      email: option.email })
  }
  const onCreated = (res) =>
    select({ value: res.id, label: res.name, email: res.email })
  const quick = useQuickContact(onCreated)
  const options = useContactOptions()
  const onCreate = allowCreate ? quick.open : undefined

  return { query, options, onType, onPick: select, onCreate, quick }
}
