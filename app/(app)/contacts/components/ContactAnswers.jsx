'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactAnswers } from '../hooks/useContactAnswers'
import { useReveal } from '../hooks/useReveal'
import { KnowHeader } from './KnowHeader'
import { AddNuggetModal } from './AddNuggetModal'
import { NuggetsBody } from './NuggetsBody'

export function ContactAnswers({ contactId }) {
  const { nuggets, reload } = useContactAnswers(contactId)
  const add = useReveal()

  const saved = () => {
    reload()
    add.hide()
  }

  return (
    <Stack gap="sm">
      <KnowHeader onAdd={add.show} />
      <AddNuggetModal open={add.shown} contactId={contactId}
        onSaved={saved} onClose={add.hide} />
      <NuggetsBody nuggets={nuggets} onChanged={reload} />
    </Stack>
  )
}
