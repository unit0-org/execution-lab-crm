import { Stack } from '../layout/Stack'
import { CheckListItem } from './CheckListItem'

// A vertical, always-visible multi-select checkbox list.
// `options`=[{value,label,desc}], `selected`=picked values[],
// `onToggle`=value=>void (fires with the clicked option's value).
export function CheckList({ options, selected, onToggle }) {
  return (
    <Stack gap="sm">
      {options.map((o) => (
        <CheckListItem key={o.value} option={o}
          checked={selected.includes(o.value)} onToggle={onToggle} />
      ))}
    </Stack>
  )
}
