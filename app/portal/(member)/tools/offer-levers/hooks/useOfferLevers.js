'use client'

import { useState } from 'react'
import { useClipboard } from '@/ui/molecules/useClipboard'
import { useEditableLists } from '@/app/portal/hooks/useEditableLists'
import { buildOfferPrompt } from '../buildOfferPrompt'
import { initialValues } from '../initialValues'
import { toInitialState } from '../toInitialState'
import { makeOfferListActions } from '../offerListActions'
import { useSavedFlags } from './useSavedFlags'
import { useOfferSingles } from './useOfferSingles'

// Offer-configurator state for one offer: single fields + levers in
// `values`, repeatable inputs in `lists`, seeded from saved rows and
// autosaved (scoped to offerId) on change.
export function useOfferLevers(initial, offerId) {
  const start = toInitialState(initial)
  const [values, setValues] = useState({ ...initialValues, ...start.singles })
  const [lists, setLists] = useState(start.lists)
  const saved = useSavedFlags()
  const singles = useOfferSingles({ setValues, saved, offerId })
  const actions = makeOfferListActions(offerId)
  const lst = useEditableLists({ setLists, saved, actions })
  const copy = useClipboard()
  const copyPrompt = () => copy(buildOfferPrompt(values, lists))

  return { values, lists, saved: saved.ids, copyPrompt, ...singles, ...lst }
}
