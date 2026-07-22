import { ButtonLink } from '@/ui/atoms/ButtonLink'

// Edit + Download PDF page actions (the header's PageActions supplies the
// row spacing).
export function InvoiceLinks({ id }) {
  return (
    <>
      <ButtonLink href={`/invoices/${id}/edit`}>Edit</ButtonLink>
      <ButtonLink href={`/api/invoices/${id}/pdf`} target="_blank">
        Download PDF
      </ButtonLink>
    </>
  )
}
