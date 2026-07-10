'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactFiles } from '../hooks/useContactFiles'
import { FilesHeader } from './FilesHeader'
import { AddFileModal } from './AddFileModal'
import { FilesBody } from './FilesBody'

export function ContactFiles({ contactId, initial, reveal }) {
  const { files, upload, remove } = useContactFiles(contactId, initial)

  return (
    <Stack gap="sm">
      <FilesHeader onAdd={reveal.show} />
      <AddFileModal open={reveal.shown} onUpload={upload}
        onSaved={reveal.hide} onClose={reveal.hide} />
      <FilesBody files={files} onDelete={remove} />
    </Stack>
  )
}
