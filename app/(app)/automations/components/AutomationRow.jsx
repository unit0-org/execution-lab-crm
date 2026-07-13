'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Text } from '@/ui/atoms/Text'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { useToggleAutomation } from '../hooks/useToggleAutomation'
import { DeleteAutomation } from './DeleteAutomation'

export function AutomationRow({ automation, onChanged }) {
  const toggle = useToggleAutomation(automation, onChanged)

  return (
    <GrowRow>
      <Text>{automation.name}</Text>
      <Checkbox checked={automation.is_active} onChange={toggle}
        label="Active" />
      <DeleteAutomation automation={automation} onChanged={onChanged} />
    </GrowRow>
  )
}
