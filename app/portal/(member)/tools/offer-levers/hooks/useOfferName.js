'use client'

import { useState } from 'react'
import { renameOfferAction } from '../actions/renameOffer'

// The editable offer name shown in the configurator header; saves on blur.
export function useOfferName(offerId, initial) {
  const [name, setName] = useState(initial)

  const onChange = (event) => setName(event.target.value)
  const save = () => renameOfferAction(offerId, name)

  return { name, onChange, save }
}
