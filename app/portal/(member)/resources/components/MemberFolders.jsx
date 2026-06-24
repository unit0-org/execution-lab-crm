import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { MemberFolder } from './MemberFolder'

export function MemberFolders({ folders }) {
  if (!folders.length)
    return <Text size="sm">Nothing posted yet.</Text>

  return (
    <Stack gap="md">
      {folders.map((folder) => (
        <MemberFolder key={folder.id} folder={folder} />
      ))}
    </Stack>
  )
}
