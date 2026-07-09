import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// Opens the offer's branded PDF (context, levers, generated offers) in a new
// tab, ready to view or download.
export function ExportOfferButton({ offerId }) {
  const href = portalRoutePath(`/tools/offer-levers/${offerId}/pdf`)

  return (
    <ButtonLink href={href} target="_blank">Export PDF</ButtonLink>
  )
}
