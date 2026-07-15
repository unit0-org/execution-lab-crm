'use client'

import { useEffect } from 'react'

// Focus the composer's textarea when a shared reveal fires — the contact
// activity bar's "Note" quick action — then reset it so it can fire again.
export function useFocusOnReveal(reveal, ref) {
  useEffect(() => {
    if (!reveal.shown) return

    ref.current?.querySelector('textarea')?.focus()
    reveal.hide()
  }, [reveal, ref])
}
