import { Inline } from '@/ui/layout/Inline'
import { ButtonLink } from '@/ui/atoms/ButtonLink'

// Edit + Download PDF actions, shown top-right of the header.
export function InvoiceLinks({ id }) {
  return (
    <Inline gap="sm" nowrap>
      <ButtonLink href={`/invoices/${id}/edit`}>Edit</ButtonLink>
      <ButtonLink href={`/api/invoices/${id}/pdf`} target="_blank">
        Download PDF
      </ButtonLink>
    </Inline>
  )
}
