import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { DateText } from '@/ui/atoms/DateText'
import { StatusBadge } from './StatusBadge'

export function InvoiceRow({ invoice }) {
  return (
    <Tr>
      <Td>
        <Link href={`/invoices/${invoice.id}`}>{invoice.number}</Link>
      </Td>
      <Td truncate>{invoice.client}</Td>
      <Td>{invoice.total}</Td>
      <Td><StatusBadge status={invoice.status} /></Td>
      <Td><DateText value={invoice.date} /></Td>
    </Tr>
  )
}
