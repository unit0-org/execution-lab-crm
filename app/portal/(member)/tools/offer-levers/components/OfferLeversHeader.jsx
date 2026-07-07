'use client'

import { TextField } from '@/ui/atoms/TextField'
import { useOfferName } from '../hooks/useOfferName'

// The configurator header: the offer's editable name.
export function OfferLeversHeader({ offerId, name }) {
  const offer = useOfferName(offerId, name)

  return (
    <TextField label="Offer name" value={offer.name} autoFocus
      placeholder="Untitled offer"
      onChange={offer.onChange} onBlur={offer.save} />
  )
}
