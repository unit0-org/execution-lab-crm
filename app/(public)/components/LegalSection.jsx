import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'

// A titled paragraph block within a legal page.
export function LegalSection({ title, children }) {
  return (
    <Stack gap="sm">
      <Heading level={2}>{title}</Heading>
      <Text>{children}</Text>
    </Stack>
  )
}
