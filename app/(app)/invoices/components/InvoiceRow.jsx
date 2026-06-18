import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { DateText } from '@/ui/atoms/DateText'
import { SelectCell } from '@/ui/molecules/SelectCell'
import { StatusBadge } from './StatusBadge'
import { SentCell } from './SentCell'
import { InvoiceClient } from './InvoiceClient'
import { InvoiceRowMenu } from './InvoiceRowMenu'

export function InvoiceRow({ invoice, selected, onToggle, onChanged }) {
  return (
    <Tr>
      <SelectCell checked={selected} onToggle={() => onToggle(invoice.id)} />
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
