'use client'

import { useState, useEffect } from 'react'
import { listShareCandidatesAction } from '../actions/listShareCandidates'
import { useSharePicks } from './useSharePicks'
import { useShareSubmit } from './useShareSubmit'
import { shareView } from '../shareView'

const loadCandidates = (offerId, setLoaded) =>
  listShareCandidatesAction(offerId).then((rows) =>
    setLoaded({ offerId, rows: Array.isArray(rows) ? rows : [] }))

// Share-dialog state for one offer: load who it can be shared with whenever
// the dialog opens on an offer, then stage picks and persist them. The rows
// are tagged with their offer, so a previous offer's people never show.
export function useOfferShares(offerId) {
  const [loaded, setLoaded] = useState({ offerId: null, rows: [] })
  const picks = useSharePicks()
  const reload = () => loadCandidates(offerId, setLoaded)
  const people = loaded.offerId === offerId ? loaded.rows : []

  useEffect(() => {
    if (offerId) loadCandidates(offerId, setLoaded)
  }, [offerId])

  return shareView(people, picks, useShareSubmit(offerId, picks, reload))
}
