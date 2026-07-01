'use client'

import { Stack } from '@/ui/layout/Stack'
import { useToggle } from '@/ui/molecules/useToggle'
import { FolderActions } from './FolderActions'
import { AddResourceModal } from './AddResourceModal'
import { FolderResources } from './FolderResources'

// The expanded contents of a folder: its actions, the add-resource modal
// and the resource list.
export function FolderBody({ folder, cohortId, onChanged }) {
  const modal = useToggle()

  const saved = () => {
    onChanged()
    modal.hide()
  }

  return (
    <Stack gap="sm">
      <FolderActions folder={folder} cohortId={cohortId}
        onAdd={modal.show} onChanged={onChanged} />
      <AddResourceModal open={modal.open} folderId={folder.id}
        cohortId={cohortId} onSaved={saved} onClose={modal.hide} />
      <FolderResources resources={folder.resource} cohortId={cohortId}
        onChanged={onChanged} />
    </Stack>
  )
}
