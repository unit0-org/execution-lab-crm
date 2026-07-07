'use client'

import { useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { useOffers } from '../hooks/useOffers'
import { OfferListHeader } from './OfferListHeader'
import { OfferCards } from './OfferCards'
import { OfferDeleteConfirm } from './OfferDeleteConfirm'

// The offers screen: header (+ create), the rows, and a delete confirm.
export function OfferListView({ initial }) {
  const offers = useOffers(initial)
  const [pending, setPending] = useState(null)

  const confirm = () => {
    offers.remove(pending.id)
    setPending(null)
  }

  return (
    <Stack gap="lg">
      <OfferListHeader onCreate={offers.create} />
      <OfferCards offers={offers.offers} onRemove={setPending}
        onBumpVersion={offers.bumpVersion} />
      <OfferDeleteConfirm offer={pending} onConfirm={confirm}
        onCancel={() => setPending(null)} />
    </Stack>
  )
}
