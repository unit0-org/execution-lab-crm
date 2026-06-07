'use client'

import { Popover } from '@/ui/molecules/Popover'
import { useToggle } from '@/ui/molecules/useToggle'
import { LabelOptionList } from './LabelOptionList'
import { LabelFilterTrigger } from './LabelFilterTrigger'

// Narrow the list to contacts carrying every checked label (AND).
export function LabelFilter({ options, filter }) {
  const pop = useToggle()
  const stateOf = (id) => (filter.ids.has(id) ? 'on' : 'off')
  const trigger = (
    <LabelFilterTrigger count={filter.ids.size} onClick={pop.toggle} />
  )

  return (
    <Popover open={pop.open} onClose={pop.hide} trigger={trigger}>
      <LabelOptionList options={options} stateOf={stateOf}
        onToggle={filter.toggle} />
    </Popover>
  )
}
