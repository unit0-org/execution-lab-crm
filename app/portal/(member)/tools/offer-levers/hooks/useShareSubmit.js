'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { shareOfferWithAction } from '../actions/shareOfferWith'
import { unshareOfferAction } from '../actions/unshareOffer'
import { sharedToast } from '../sharedToast'

// Persists the share dialog: grant the staged people access (which emails
// them), or revoke one existing share. Both reload the candidate list so the
// dialog reflects the truth from the server.
export function useShareSubmit(offerId, picks, reload) {
  const [sharing, setSharing] = useState(false)

  const done = (result) => {
    picks.clear()
    setSharing(false)
    reload()
    showToast(sharedToast(result?.shared || 0))
  }

  const share = () => {
    setSharing(true)
    shareOfferWithAction(offerId, picks.ids).then(done)
  }

  const unshare = (id) => unshareOfferAction(offerId, id).then(reload)

  return { sharing, share, unshare }
}
