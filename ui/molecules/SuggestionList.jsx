'use client'

import { useAnchorRect } from './useAnchorRect'
import { listStyle } from './Combobox.styles'
import { SuggestionItem } from './SuggestionItem'

// Dropdown of matches, fixed-positioned to its `anchor` field so a Modal
// or table overflow wrapper can't clip it. Hidden when there's nothing.
export function SuggestionList({ open, anchor, options, onPick }) {
  const rect = useAnchorRect(anchor, open)

  if (!open || !options.length || !rect) return null

  return (
    <div style={listStyle(rect)}>
      {options.map((option) => (
        <SuggestionItem key={option.value} option={option} onPick={onPick} />
      ))}
    </div>
  )
}
