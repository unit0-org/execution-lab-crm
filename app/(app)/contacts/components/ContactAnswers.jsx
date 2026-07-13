'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactAnswers } from '../hooks/useContactAnswers'
import { AddNuggetModal } from './AddNuggetModal'
import { NuggetsBody } from './NuggetsBody'

// The section heading, its `+` and its collapse all belong to Collapsible
// (inside NuggetsBody) — there is no hand-rolled header here.
export function ContactAnswers({ contactId, initial, reveal }) {
  const { nuggets, reload } = useContactAnswers(contactId, initial)

  const saved = () => {
    reload()
    reveal.hide()
  }

  return (
    <Stack gap="sm">
      <AddNuggetModal open={reveal.shown} contactId={contactId}
        onSaved={saved} onClose={reveal.hide} />
      <NuggetsBody nuggets={nuggets} onChanged={reload} onAdd={reveal.show} />
    </Stack>
  )
}
