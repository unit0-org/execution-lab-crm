'use client'

import { useState } from 'react'

// The dialogs an offer card's menu opens: which offer is pending deletion,
// and which offer's share dialog is open. Held here, above the card links,
// so a dialog is never nested inside a card's clickable surface.
export function useOfferListDialogs(removeOffer) {
  const [pending, setPending] = useState(null)
  const [sharing, setSharing] = useState(null)

  const confirmRemove = () => {
    removeOffer(pending.id)
    setPending(null)
  }

  return {
    pending,
    sharing,
    confirmRemove,
    askRemove: setPending,
    cancelRemove: () => setPending(null),
    openShare: setSharing,
    closeShare: () => setSharing(null)
  }
}
