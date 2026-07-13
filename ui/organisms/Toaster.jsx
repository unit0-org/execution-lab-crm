'use client'

import { Toast } from '@/ui/molecules/Toast'
import { useToasts } from '@/ui/molecules/useToasts'
import { toasterStyle } from './Toaster.styles'

/** Toast outlet — mount once at the root; stacks toasts bottom-center. */
export function Toaster() {
  const { toasts } = useToasts()

  return (
    <div style={toasterStyle}>
      {toasts.map((t) => <Toast key={t.id} message={t.message} />)}
    </div>
  )
}
