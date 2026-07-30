'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { removeEventConversionAction }
  from '../actions/removeEventConversion'

// The hook stays synchronous — it hands the promise a callback rather
// than making the component await anything.
export function useRemoveEventConversion(eventId, onRemoved) {
  const remove = () => {
    removeEventConversionAction(eventId).then((state) => {
      showToast(state.message)
      onRemoved()
    })
  }

  return { remove }
}
