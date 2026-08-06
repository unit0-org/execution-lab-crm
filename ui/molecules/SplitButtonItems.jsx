import { MenuRow } from './MenuRow'

// The caret's menu — internal to SplitButton, not public API. One row per
// way to run the action; picking one closes the menu first.
export function SplitButtonItems({ items, onPick }) {
  return items.map((item) => (
    <MenuRow key={item.label} label={item.label} subtitle={item.hint}
      onClick={() => onPick(item)} />
  ))
}
