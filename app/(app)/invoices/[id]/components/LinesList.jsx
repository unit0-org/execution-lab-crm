'use client'

import { Text } from '@/ui/atoms/Text'
import { Table } from '@/ui/molecules/Table'
import { LineRow } from './LineRow'
import { lineColumns } from './lineColumns'

export function LinesList({ lines }) {
  if (!lines.length) return <Text tone="muted">No items yet.</Text>

  return (
    <Table cols={lineColumns}>
      {lines.map((line) => (
        <LineRow key={line.id} line={line} />
      ))}
    </Table>
  )
}
