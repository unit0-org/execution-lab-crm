import { MenuRow } from './MenuRow'

// One selectable row in the suggestions dropdown.
export function SuggestionItem({ option, onPick }) {
  const choose = () => onPick(option)

  return <MenuRow label={option.label} onClick={choose} />
}
