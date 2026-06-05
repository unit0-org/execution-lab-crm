import { itemStyle } from './Combobox.styles'

// One selectable row in the suggestions dropdown.
export function SuggestionItem({ option, onPick }) {
  const choose = () => onPick(option)

  return (
    <button type="button" style={itemStyle} onClick={choose}>
      {option.label}
    </button>
  )
}
