'use client'

import { FormActions } from '@/ui/molecules/FormActions'

export function ApplyFixesBar({ count, busy, onApply }) {
  return (
    <FormActions label={`Apply selected (${count})`} busy={busy}
      disabled={!count} onConfirm={onApply} />
  )
}
