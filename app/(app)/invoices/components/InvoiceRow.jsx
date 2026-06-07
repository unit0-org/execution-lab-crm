import { Tr } from '@/ui/molecules/Tr'
import { Td } from '@/ui/molecules/Td'
import { Link } from '@/ui/atoms/Link'
import { ExternalLink } from '@/ui/atoms/ExternalLink'
import { Icon } from '@/ui/atoms/Icon'
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
      <Td>
        <ExternalLink href={`/api/invoices/${invoice.id}/pdf`}>
          <Icon name="file" size={16} />
        </ExternalLink>
      </Td>
    </Tr>
  )
}
