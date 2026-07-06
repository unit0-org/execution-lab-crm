'use client'

import { useState } from 'react'
import { useClipboard } from '@/ui/molecules/useClipboard'
import { buildOfferPrompt } from '../buildOfferPrompt'
import { initialValues } from '../initialValues'
import { toInitialState } from '../toInitialState'
import { useSavedFlags } from './useSavedFlags'
import { useOfferSingles } from './useOfferSingles'
import { useOfferLists } from './useOfferLists'

// Offer-configurator state: single fields + levers in `values`, repeatable
// inputs in `lists`, both seeded from saved rows and autosaved on change.
export function useOfferLevers(initial) {
  const start = toInitialState(initial)
  const [values, setValues] = useState({ ...initialValues, ...start.singles })
  const [lists, setLists] = useState(start.lists)
  const saved = useSavedFlags()
  const singles = useOfferSingles({ setValues, saved })
  const listOps = useOfferLists({ setLists, saved })
  const copy = useClipboard()
  const copyPrompt = () => copy(buildOfferPrompt(values, lists))

  return {
    values, lists, saved: saved.ids, copyPrompt, ...singles, ...listOps
  }
}
