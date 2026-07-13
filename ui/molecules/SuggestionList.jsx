'use client'

import { useAnchorRect } from './useAnchorRect'
import { listStyle } from './Combobox.styles'
import { SuggestionItem } from './SuggestionItem'

/**
 * Dropdown list used by `Combobox`, fixed-positioned to its `anchor` so
 * a Modal or table overflow wrapper can't clip it.
 */
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
