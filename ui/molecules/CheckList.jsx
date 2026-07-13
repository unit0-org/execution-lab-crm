import { Stack } from '../layout/Stack'
import { CheckListItem } from './CheckListItem'

/**
 * Always-visible multi-select checkbox list (label + description per
 * row). `options`=`[{value,label,desc}]`; `onToggle` gets the value.
 */
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
