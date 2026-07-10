'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FileField } from '@/ui/atoms/FileField'
import { FileFormActions } from './FileFormActions'
import { useFileForm } from '../hooks/useFileForm'

export function FileForm({ onUpload, onSaved, onCancel }) {
  const { file, busy, pick, submit } = useFileForm(onUpload, onSaved)

  return (
    <Stack gap="md">
      <Heading level={3}>Add file</Heading>
      <FileField label="File" onChange={pick} />
      <FileFormActions busy={busy} ready={!!file}
        onUpload={submit} onCancel={onCancel} />
    </Stack>
  )
}
