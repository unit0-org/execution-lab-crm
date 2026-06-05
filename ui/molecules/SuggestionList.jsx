import { listStyle } from './Combobox.styles'
import { SuggestionItem } from './SuggestionItem'

// Dropdown of matches under a Combobox; hidden when there's nothing.
export function SuggestionList({ open, options, onPick }) {
  if (!open || !options.length) return null

  return (
    <div style={listStyle}>
      {options.map((option) => (
        <SuggestionItem key={option.value} option={option} onPick={onPick} />
      ))}
    </div>
  )
}
