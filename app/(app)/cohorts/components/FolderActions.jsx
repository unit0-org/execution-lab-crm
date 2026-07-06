'use client'

import { Inline } from '@/ui/layout/Inline'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeCohortFolderAction } from '../actions/removeCohortFolder'

// Add-resource and delete-folder controls, shown inside an expanded folder.
export function FolderActions({ folder, cohortId, onAdd, onChanged }) {
  const removeFolder = useActionHandler(removeCohortFolderAction, {
    onDone: onChanged, toast: 'Folder deleted'
  })

  return (
    <Inline gap="xs">
      <IconButton label="Add resource" onClick={onAdd}>
        <Icon name="plus" size={16} />
      </IconButton>
      <RowDelete onConfirm={() => removeFolder(folder.id, cohortId)}
        title="Delete folder" />
    </Inline>
  )
}
