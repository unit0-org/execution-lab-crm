'use client'

import { Stack } from '@/ui/layout/Stack'
import { useOffers } from '../hooks/useOffers'
import { useOfferListDialogs } from '../hooks/useOfferListDialogs'
import { OfferListHeader } from './OfferListHeader'
import { OfferCards } from './OfferCards'
import { SharedOffersSection } from './SharedOffersSection'
import { OfferListDialogs } from './OfferListDialogs'

// The offers screen: my offers, offers shared with me, and the dialogs their
// card menus open (delete confirm, share).
export function OfferListView({ initial, shared }) {
  const offers = useOffers(initial)
  const dialogs = useOfferListDialogs(offers.remove)

  return (
    <Stack gap="lg">
      <OfferListHeader onCreate={offers.create} />
      <OfferCards offers={offers.offers} onShare={dialogs.openShare}
        onRemove={dialogs.askRemove} />
      <SharedOffersSection offers={shared} />
      <OfferListDialogs dialogs={dialogs} />
    </Stack>
  )
}
