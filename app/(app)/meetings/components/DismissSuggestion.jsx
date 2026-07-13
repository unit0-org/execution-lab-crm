'use client'

import { Button } from '@/ui/atoms/Button'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useToggle } from '@/ui/molecules/useToggle'

const MESSAGE = 'This suggestion will not be offered again.'

// Dismissing drops the suggestion permanently, so it asks first.
export function DismissSuggestion({ onDismiss }) {
  const confirm = useToggle()
  const run = () => { confirm.hide(); onDismiss() }

  return (
    <>
      <Button size="sm" onClick={confirm.show}>Dismiss</Button>
      <ConfirmDialog open={confirm.open} title="Dismiss this suggestion?"
        message={MESSAGE} confirmLabel="Dismiss"
        onConfirm={run} onCancel={confirm.hide} />
    </>
  )
}
