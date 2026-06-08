'use client'

import { useState } from 'react'
import { useRelTypeOptions } from './useRelTypeOptions'

const OTHER = 'Other…'

// Relationship as a dropdown of predefined types (ordered) plus an "Other…"
// entry that switches to a free-text custom label.
export function useRelTypeSelect(value, onChange) {
  const options = useRelTypeOptions()
  const [custom, setCustom] = useState(false)
  const names = ['', ...options.map((o) => o.label), OTHER]

  const select = (e) => {
    const name = e.target.value
    const opt = options.find((o) => o.label === name)

    setCustom(name === OTHER)
    onChange({ typeId: opt ? opt.value : null, label: opt ? name : '' })
  }
  const typeCustom = (e) => onChange({ typeId: null, label: e.target.value })

  return {
    names, current: custom ? OTHER : value.label, custom, select, typeCustom
  }
}
