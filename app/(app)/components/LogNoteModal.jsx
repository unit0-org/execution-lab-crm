'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { ContactAutocomplete }
  from '../contacts/components/ContactAutocomplete'
import { LogNoteBody } from './LogNoteBody'
import { useLogNote } from '../hooks/useLogNote'

export function LogNoteModal({ open, onClose, onLogged }) {
  const note = useLogNote()
  const close = () => { note.reset(); onClose() }
  const saved = () => { note.reset(); onLogged() }

  return (
    <Modal open={open} onClose={close}>
      <Stack gap="md">
        <Heading level={3} gutter="none">Log interaction</Heading>
        <ContactAutocomplete label="Person" value={note.value}
          onChange={note.setValue} allowCreate />
        <LogNoteBody contactId={note.contactId} onSaved={saved} />
      </Stack>
    </Modal>
  )
}
