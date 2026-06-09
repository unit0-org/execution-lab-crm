'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { NoteTools } from './NoteTools'

export function NoteHead({ note, onChanged, children }) {
  return (
    <GrowRow>
      {children}
      <NoteTools note={note} onChanged={onChanged} />
    </GrowRow>
  )
}
