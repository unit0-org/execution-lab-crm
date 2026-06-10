'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { setCohortStatusAction } from '../actions/setCohortStatus'

// Persist a cohort status change from a Select, toasting and notifying
// the caller once it lands.
export function useCohortStatus(id, onChanged) {
  const onChange = (e) => {
    const status = e.target.value

    setCohortStatusAction(id, status).then(() => {
      showToast('Status updated')
      onChanged()
    })
  }

  return { onChange }
}
