import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { runMarkPaid, runInvoice } from './markPaidSteps'

// Two-step row flow: confirm mark-paid, then optionally invoice. Refresh
// is deferred to the end so the row (and this menu) don't unmount midway.
export function useMarkPaidFlow(registrationId, onDone) {
  const router = useRouter()
  const [step, setStep] = useState('idle')

  const close = () => {
    setStep('idle')
    onDone()
  }

  const finish = () => {
    close()
    router.refresh()
  }

  return {
    step,
    ask: () => setStep('confirm'),
    cancel: close,
    confirm: () => runMarkPaid(registrationId, () => setStep('invoice')),
    invoice: (amount) => runInvoice(registrationId, amount, finish),
    skip: finish
  }
}
