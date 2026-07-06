'use client'

import { showToast } from '@/ui/molecules/toastBus'

// Run a server action, optionally toast its outcome, then call onDone.
export function useActionHandler(action, { onDone, toast } = {}) {
  return (...args) =>
    action(...args).then((result) => {
      if (toast) showToast(result?.error || toast)

      return onDone?.(result)
    })
}
