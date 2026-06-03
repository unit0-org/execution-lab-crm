'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactAnswers } from '../hooks/useContactAnswers'
import { useReveal } from '../hooks/useReveal'
import { KnowHeader } from './KnowHeader'
import { AddNuggetSlot } from './AddNuggetSlot'
import { NuggetList } from './NuggetList'

export function ContactAnswers({ contactId }) {
  const { nuggets, reload } = useContactAnswers(contactId)
  const add = useReveal()
  const items = nuggets || []

  const saved = () => {
    reload()
    add.hide()
  }

  return (
    <Stack gap="sm">
      <KnowHeader onAdd={add.show} />
      <AddNuggetSlot shown={add.shown} contactId={contactId}
        onSaved={saved} onCancel={add.hide} />
      <NuggetList nuggets={items} />
    </Stack>
  )
}
