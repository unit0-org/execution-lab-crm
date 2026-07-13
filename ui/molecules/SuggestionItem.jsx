import { MenuRow } from './MenuRow'

/** One selectable row in a `SuggestionList` dropdown. */
export function SuggestionItem({ option, onPick }) {
  const choose = () => onPick(option)

  return <MenuRow label={option.label} onClick={choose} />
}
