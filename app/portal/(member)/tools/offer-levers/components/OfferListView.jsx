'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { useOffers } from '../hooks/useOffers'
import { OfferListHeader } from './OfferListHeader'
import { OfferCards } from './OfferCards'
import { SharedOffersSection } from './SharedOffersSection'
import { OfferDeleteConfirm } from './OfferDeleteConfirm'

// The offers screen: my offers, offers shared with me, and a delete confirm.
export function OfferListView({ initial, shared }) {
  const offers = useOffers(initial)
  const [pending, setPending] = useState(null)

  const confirm = () => {
    offers.remove(pending.id)
    setPending(null)
  }

  return (
    <Stack gap="lg">
      <OfferListHeader onCreate={offers.create} />
      <OfferCards offers={offers.offers} onRemove={setPending} />
      <SharedOffersSection offers={shared} />
      <OfferDeleteConfirm offer={pending} onConfirm={confirm}
        onCancel={() => setPending(null)} />
    </Stack>
  )
}
