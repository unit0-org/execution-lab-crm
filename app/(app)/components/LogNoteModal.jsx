'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { Stack } from '@/ui/layout/Stack'
import { ContactAutocomplete }
  from '../contacts/components/ContactAutocomplete'
import { LogNoteBody } from './LogNoteBody'
import { useLogNote } from '../hooks/useLogNote'

export function LogNoteModal({ open, onClose, onLogged }) {
  const note = useLogNote()
  const close = () => { note.reset(); onClose() }
  const saved = () => { note.reset(); onLogged() }

  return (
    <TitledModal open={open} title="Log note" onClose={close}>
      <Stack gap="md">
        <ContactAutocomplete label="Person" value={note.value}
          onChange={note.setValue} allowCreate />
        <LogNoteBody contactId={note.contactId} onSaved={saved} />
      </Stack>
    </TitledModal>
  )
}
