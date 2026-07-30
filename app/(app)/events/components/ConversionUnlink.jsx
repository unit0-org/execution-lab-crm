'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'

// Only a linked event can stop reporting, so this renders nothing until
// there is a rule to remove.
export function ConversionUnlink({ linked, onConfirm }) {
  if (!linked) return null

  return <RowDelete onConfirm={onConfirm} title="Stop reporting" />
}
