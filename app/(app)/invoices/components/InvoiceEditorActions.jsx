'use client'

import { Button } from '@/ui/atoms/Button'
import { FieldError } from '@/ui/atoms/FieldError'

export function InvoiceEditorActions({ onSave, canSave, error }) {
  return (
    <>
      <Button tone="primary" onClick={onSave} disabled={!canSave}>
        Save invoice
      </Button>
      <FieldError message={error} />
    </>
  )
}
