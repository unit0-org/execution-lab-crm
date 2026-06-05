'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useLineActions } from '../../hooks/useLineActions'

const label = (line) =>
  `${line.description} · ${line.quantity} × ${line.unitAmount}`

export function LineRow({ line, onChanged }) {
  const { remove } = useLineActions(onChanged)

  return (
    <GrowRow align="center">
      <Text>{label(line)}</Text>
      <Text>{line.amount}</Text>
      <IconButton label="Remove line" onClick={() => remove(line.id)}>
        <Icon name="trash" size={16} />
      </IconButton>
    </GrowRow>
  )
}
