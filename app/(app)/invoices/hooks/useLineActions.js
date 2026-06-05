'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { removeLineAction } from '../actions/removeLine'

export function useLineActions(onChanged) {
  const remove = (lineId) =>
    removeLineAction(lineId).then(() => {
      showToast('Line removed')
      onChanged()
    })

  return { remove }
}
