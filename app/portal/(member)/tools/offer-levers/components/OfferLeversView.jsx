'use client'

import { Stack } from '@/ui/layout/Stack'
import { useOfferLevers } from '../hooks/useOfferLevers'
import { OfferLeversHeader } from './OfferLeversHeader'
import { OfferLeversBody } from './OfferLeversBody'
import { OfferCommentsSection } from './OfferCommentsSection'

export function OfferLeversView(props) {
  const { initial, offerId, offerName, offerVersion } = props
  const { discussion, viewerContactId } = props
  const offer = useOfferLevers(initial, offerId)
  const on = {
    field: offer.setField, add: offer.add, update: offer.update,
    remove: offer.remove, active: offer.setActive
  }

  return (
    <Stack gap="lg">
      <OfferLeversHeader offerId={offerId} name={offerName}
        version={offerVersion} />
      <OfferLeversBody offer={offer} on={on} />
      <OfferCommentsSection offerId={offerId} initial={discussion.comments}
        audience={discussion.audience} viewerContactId={viewerContactId} />
    </Stack>
  )
}
