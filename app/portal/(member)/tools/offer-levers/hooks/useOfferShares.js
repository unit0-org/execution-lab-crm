'use client'

import { useState, useEffect } from 'react'
import { listShareCandidatesAction } from '../actions/listShareCandidates'
import { shareOfferAction } from '../actions/shareOffer'
import { unshareOfferAction } from '../actions/unshareOffer'
import { toShareToggle } from '../toShareToggle'

// Share-dialog state: load who this offer can be shared with when it opens,
// then optimistically toggle each person on/off, persisting via the actions.
export function useOfferShares(offerId, open) {
  const [people, setPeople] = useState([])

  useEffect(() => {
    if (!open) return

    listShareCandidatesAction(offerId)
      .then((rows) => setPeople(Array.isArray(rows) ? rows : []))
  }, [offerId, open])

  const toggle = (contactId) => {
    const person = people.find((p) => p.contactId === contactId)
    const run = person?.shared ? unshareOfferAction : shareOfferAction

    setPeople((cur) => toShareToggle(cur, contactId))
    run(offerId, contactId)
  }

  return { people, toggle }
}
