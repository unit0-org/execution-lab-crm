'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { useRemoveFolder } from '../hooks/useRemoveFolder'

export function FolderHeader({ folder, cohortId, onAdd, onChanged }) {
  const removeFolder = useRemoveFolder(onChanged)

  return (
    <GrowRow align="center">
      <Heading level={3} gutter="none">{folder.name}</Heading>
      <Inline gap="xs">
        <IconButton label="Add resource" onClick={onAdd}>
          <Icon name="plus" size={16} />
        </IconButton>
        <RowDelete onConfirm={() => removeFolder(folder.id, cohortId)}
          title="Delete folder" />
      </Inline>
    </GrowRow>
  )
}
