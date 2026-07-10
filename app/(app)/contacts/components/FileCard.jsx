'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { FileName } from './FileName'
import { FileMeta } from './FileMeta'
import { DeleteFileButton } from './DeleteFileButton'

export function FileCard({ file, onDelete }) {
  return (
    <Card id={`file-${file.id}`}>
      <Stack gap="xs">
        <Inline gap="sm">
          <FileName file={file} />
          <DeleteFileButton file={file} onDelete={onDelete} />
        </Inline>
        <FileMeta file={file} />
      </Stack>
    </Card>
  )
}
