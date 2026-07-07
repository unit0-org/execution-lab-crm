import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'

// Popover content for the version field: light guidance on how to version
// an offer — bump major for a big shift, minor for small tweaks.
export function VersionInfo() {
  return (
    <Stack gap="sm">
      <Text size="sm" gutter="none">
        Don&apos;t get too sophisticated about versioning — just keep track
        of your offer&apos;s different versions.
      </Text>
      <Text size="sm" gutter="none">
        Change the major version for a major change: a completely different
        product, a new ICP, and the like.
      </Text>
      <Text size="sm" gutter="none">
        Change the minor version for messaging, pricing, and other small
        changes.
      </Text>
    </Stack>
  )
}
