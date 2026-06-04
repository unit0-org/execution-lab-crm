import { Table } from '@/ui/molecules/Table'
import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Skeleton } from '@/ui/atoms/Skeleton'

const ROWS = [0, 1, 2]
const COLS = ['Meeting', 'Type', 'Date', 'Attendees']

export function MeetingsSkeleton() {
  return (
    <Table cols={COLS}>
      {ROWS.map((i) => (
        <Tr key={i} plain>
          <Td><Skeleton height={16} /></Td>
          <Td><Skeleton height={16} /></Td>
          <Td><Skeleton height={16} /></Td>
          <Td><Skeleton height={16} /></Td>
        </Tr>
      ))}
    </Table>
  )
}
