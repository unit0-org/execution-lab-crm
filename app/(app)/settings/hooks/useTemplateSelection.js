'use client'

import { useState } from 'react'
import { humanizeTemplateKey } from '../components/humanizeTemplateKey'

// Tracks which template the editor is showing and builds Select options.
export function useTemplateSelection(templates) {
  const [selectedKey, setSelectedKey] = useState(templates[0].template_key)
  const onSelect = (e) => setSelectedKey(e.target.value)
  const options = templates.map((t) => ({
    value: t.template_key,
    label: humanizeTemplateKey(t.template_key)
  }))
  const selected =
    templates.find((t) => t.template_key === selectedKey) || templates[0]

  return { selectedKey, onSelect, options, selected }
}
