'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Text } from '@/ui/atoms/Text'

const label = (line) =>
  `${line.description} · ${line.quantity} × ${line.unitAmount}`

export function LineRow({ line }) {
  return (
    <GrowRow align="center">
      <Text>{label(line)}</Text>
      <Text>{line.amount}</Text>
    </GrowRow>
  )
}
