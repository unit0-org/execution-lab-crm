'use client'

import { Stack } from '../layout/Stack'
import { Popover } from './Popover'
import { useToggle } from './useToggle'
import { MultiSelectTrigger } from './MultiSelectTrigger'
import { MultiSelectOption } from './MultiSelectOption'

// A dropdown of checkboxes; the trigger shows the chosen labels.
export function MultiSelect({ options, selected, onToggle, placeholder }) {
  const menu = useToggle()
  const trigger = (
    <MultiSelectTrigger options={options} selected={selected}
      placeholder={placeholder} onClick={menu.toggle} />
  )

  return (
    <Popover open={menu.open} onClose={menu.hide} trigger={trigger}>
      <Stack gap="sm">
        {options.map((o) => (
          <MultiSelectOption key={o.value} option={o}
            checked={selected.includes(o.value)} onToggle={onToggle} />
        ))}
      </Stack>
    </Popover>
  )
}
