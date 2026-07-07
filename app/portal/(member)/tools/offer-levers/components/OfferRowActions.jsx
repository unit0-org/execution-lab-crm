import { DateText } from '@/ui/atoms/DateText'
import { Link } from '@/ui/atoms/Link'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// An offer row's trailing bits: created date, Open link, and delete.
export function OfferRowActions({ offer, onRemove }) {
  const href = portalRoutePath('/tools/offer-levers/' + offer.id)

  return (
    <>
      <DateText value={offer.created_at} />
      <Link href={href}>Open →</Link>
      <IconButton label="Delete offer" onClick={() => onRemove(offer)}>
        <Icon name="trash" size={16} />
      </IconButton>
    </>
  )
}
