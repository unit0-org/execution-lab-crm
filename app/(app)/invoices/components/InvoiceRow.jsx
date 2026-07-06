import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { DateText } from '@/ui/atoms/DateText'
import { StatusBadge } from './StatusBadge'
import { SentCell } from './SentCell'
import { InvoiceClient } from './InvoiceClient'
import { InvoiceRowMenu } from './InvoiceRowMenu'

export function InvoiceRow({ invoice, selected, onToggle, onChanged }) {
  const select = { checked: selected, onToggle: () => onToggle(invoice.id) }

  return (
    <Tr select={select}>
      <Td>
        <Link href={`/invoices/${invoice.id}`}>{invoice.number}</Link>
      </Td>
      <Td truncate><InvoiceClient invoice={invoice} /></Td>
      <Td>{invoice.total}</Td>
      <Td><StatusBadge status={invoice.status} /></Td>
      <Td><SentCell sentAt={invoice.sentAt} /></Td>
      <Td><DateText value={invoice.date} /></Td>
      <Td><InvoiceRowMenu invoice={invoice} onChanged={onChanged} /></Td>
    </Tr>
  )
}
