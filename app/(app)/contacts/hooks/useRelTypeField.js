'use client'

import { useState } from 'react'
import { useRelTypeOptions } from './useRelTypeOptions'

// A typeahead over relationship types; free text becomes a custom label.
export function useRelTypeField(value, onChange) {
  const [query, setQuery] = useState(value.label)
  const options = useRelTypeOptions()

  const onType = (text) => {
    setQuery(text)
    onChange({ typeId: null, label: text })
  }
  const onPick = (option) => {
    setQuery(option.label)
    onChange({ typeId: option.value, label: option.label })
  }

  return { query, options, onType, onPick }
}
