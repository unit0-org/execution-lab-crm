'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { createOfferAction } from '../actions/createOffer'
import { removeOfferAction } from '../actions/removeOffer'
import { changeOfferVersionAction } from '../actions/changeOfferVersion'

// Offer-list state: optimistic create (opens it) and remove.
export function useOffers(initial) {
  const router = useRouter()
  const [offers, setOffers] = useState(initial)

  const open = (id) => router.push(portalRoutePath('/tools/offer-levers/' + id))

  const create = () => createOfferAction().then((offer) => open(offer.id))

  const remove = (id) => {
    setOffers((cur) => cur.filter((o) => o.id !== id))
    removeOfferAction(id)
  }

  const bumpVersion = (id, dMajor, dMinor) =>
    changeOfferVersionAction(id, dMajor, dMinor).then((v) =>
      setOffers((cur) => cur.map((o) => (o.id === id ? { ...o, ...v } : o))))

  return { offers, open, create, remove, bumpVersion }
}
