import { listStyle } from './Combobox.styles'
import { SuggestionItem } from './SuggestionItem'
import { CreateOptionRow } from './CreateOptionRow'

// Dropdown of matches with an optional inline "create" row.
export function AutocompleteMenu(props) {
  const { open, options, onPick, query } = props
  const { onCreate, canCreate, createLabel } = props

  if (!open || (!options.length && !canCreate)) return null

  return (
    <div style={listStyle}>
      {options.map((option) => (
        <SuggestionItem key={option.value} option={option} onPick={onPick} />
      ))}
      <CreateOptionRow show={canCreate} label={createLabel} query={query}
        onCreate={onCreate} />
    </div>
  )
}
