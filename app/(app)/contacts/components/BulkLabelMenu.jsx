'use client'

import { LabelMenu } from './LabelMenu'
import { useBulkLabel } from '../hooks/useBulkLabel'

// The Label menu wired for a multi-selection; keeps the selection so the
// user can apply several labels in one go.
export function BulkLabelMenu({ chosen, cats, onChanged }) {
  const bulk = useBulkLabel(chosen, onChanged)

  return (
    <LabelMenu cats={cats} stateOf={bulk.stateOf} onToggle={bulk.toggle}
      label="Label" />
  )
}
