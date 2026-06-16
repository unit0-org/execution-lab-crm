'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactAnswers } from '../hooks/useContactAnswers'
import { KnowHeader } from './KnowHeader'
import { AddNuggetModal } from './AddNuggetModal'
import { NuggetsBody } from './NuggetsBody'

export function ContactAnswers({ contactId, initial, reveal }) {
  const { nuggets, reload } = useContactAnswers(contactId, initial)

  const saved = () => {
    reload()
    reveal.hide()
  }

  return (
    <Stack gap="sm">
      <KnowHeader onAdd={reveal.show} />
      <AddNuggetModal open={reveal.shown} contactId={contactId}
        onSaved={saved} onClose={reveal.hide} />
      <NuggetsBody nuggets={nuggets} onChanged={reload} />
    </Stack>
  )
}
