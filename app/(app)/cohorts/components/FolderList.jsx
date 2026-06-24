import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { CohortFolderCard } from './CohortFolderCard'

export function FolderList({ folders, cohortId, onChanged }) {
  if (!folders.length)
    return <Text size="sm">No folders yet. Add one to start.</Text>

  return (
    <Stack gap="lg">
      {folders.map((folder) => (
        <CohortFolderCard key={folder.id} folder={folder} cohortId={cohortId}
          onChanged={onChanged} />
      ))}
    </Stack>
  )
}
