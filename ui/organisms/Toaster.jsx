'use client'

import { Toast } from '@/ui/molecules/Toast'
import { useToasts } from '@/ui/molecules/useToasts'
import { toasterStyle } from './Toaster.styles'

// App-wide stack of transient toasts (bottom-centered).
export function Toaster() {
  const { toasts } = useToasts()

  return (
    <div style={toasterStyle}>
      {toasts.map((t) => <Toast key={t.id} message={t.message} />)}
    </div>
  )
}
