'use client'

import { useState } from 'react'
import { useContactOptions } from './useContactOptions'
import { useQuickContact } from './useQuickContact'

export function useClientField(client, onChange) {
  const [query, setQuery] = useState(client.name)

  const onType = (value) => {
    setQuery(value)
    onChange({ contactId: null, name: value, email: '' })
  }
  const select = (option) => {
    setQuery(option.label)
    onChange({ contactId: option.value, name: option.label,
      email: option.email })
  }
  const onCreated = (res) =>
    select({ value: res.id, label: res.name, email: res.email })
  const quick = useQuickContact(onCreated)
  const options = useContactOptions(query)

  return { query, options, onType, onPick: select, quick }
}
