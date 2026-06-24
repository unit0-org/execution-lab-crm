'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { useCohortFolders } from '../hooks/useCohortFolders'
import { AddFolderModal } from './AddFolderModal'
import { FolderList } from './FolderList'

// A cohort's resource folders, with a "+" to add a folder. Each folder
// holds its own notes, resources and recordings.
export function CohortResources({ cohortId, initial }) {
  const { folders, reload } = useCohortFolders(cohortId, initial)
  const modal = useToggle()

  const saved = () => {
    reload()
    modal.hide()
  }

  return (
    <Stack gap="md">
      <SectionHeader title="Resources" addLabel="Add folder"
        onAdd={modal.show} />
      <AddFolderModal open={modal.open} cohortId={cohortId}
        onSaved={saved} onClose={modal.hide} />
      <FolderList folders={folders} cohortId={cohortId} onChanged={reload} />
    </Stack>
  )
}
