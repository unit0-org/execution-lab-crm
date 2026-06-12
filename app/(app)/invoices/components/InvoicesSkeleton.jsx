import { Table } from '@/ui/molecules/Table'
import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Skeleton } from '@/ui/atoms/Skeleton'

const ROWS = [0, 1, 2]
const COLS = ['Number', 'Client', 'Total', 'Status', 'Sent', 'Date']

export function InvoicesSkeleton() {
  return (
    <Table cols={COLS}>
      {ROWS.map((i) => (
        <Tr key={i} plain>
          {COLS.map((c) => (
            <Td key={c}><Skeleton height={16} /></Td>
          ))}
        </Tr>
      ))}
    </Table>
  )
}
