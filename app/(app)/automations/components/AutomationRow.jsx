'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Text } from '@/ui/atoms/Text'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useAutomationRow } from '../hooks/useAutomationRow'

export function AutomationRow({ automation, onChanged }) {
  const row = useAutomationRow(automation, onChanged)

  return (
    <GrowRow>
      <Text>{automation.name}</Text>
      <Checkbox checked={automation.is_active} onChange={row.toggle}
        label="Active" />
      <IconButton label="Delete automation" onClick={row.remove}>
        <Icon name="trash" size={16} />
      </IconButton>
    </GrowRow>
  )
}
