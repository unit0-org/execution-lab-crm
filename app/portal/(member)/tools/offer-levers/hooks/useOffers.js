'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { createOfferAction } from '../actions/createOffer'
import { renameOfferAction } from '../actions/renameOffer'
import { removeOfferAction } from '../actions/removeOffer'

// Offer-list state: optimistic create (opens it), rename, and remove.
export function useOffers(initial) {
  const router = useRouter()
  const [offers, setOffers] = useState(initial)

  const open = (id) => router.push(portalRoutePath('/tools/offer-levers/' + id))

  const create = () => createOfferAction().then((offer) => open(offer.id))

  const rename = (id, name) => {
    setOffers((cur) => cur.map((o) => (o.id === id ? { ...o, name } : o)))
    renameOfferAction(id, name)
  }

  const remove = (id) => {
    setOffers((cur) => cur.filter((o) => o.id !== id))
    removeOfferAction(id)
  }

  return { offers, open, create, rename, remove }
}
