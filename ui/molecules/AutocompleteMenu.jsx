'use client'

import { useAnchorRect } from './useAnchorRect'
import { listStyle } from './Combobox.styles'
import { SuggestionItem } from './SuggestionItem'
import { CreateOptionRow } from './CreateOptionRow'

// Dropdown of matches with an optional inline "create" row; fixed to its
// `anchor` field so an overflow wrapper can't clip it.
export function AutocompleteMenu(props) {
  const { open, anchor, options, onPick, query } = props
  const { onCreate, canCreate, createLabel } = props
  const rect = useAnchorRect(anchor, open)

  if (!open || !rect || (!options.length && !canCreate)) return null

  return (
    <div style={listStyle(rect)}>
      {options.map((option) => (
        <SuggestionItem key={option.value} option={option} onPick={onPick} />
      ))}
      <CreateOptionRow show={canCreate} label={createLabel} query={query}
        onCreate={onCreate} />
    </div>
  )
}
