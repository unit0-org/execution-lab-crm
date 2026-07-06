import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { toBulletItems } from '../bulletText'

// A bullet block rendered as a stack of "• "-prefixed lines (no new ui
// primitive; the marker rides in the text).
export function BulletList({ text }) {
  const items = toBulletItems(text)

  return (
    <Stack gap="xs">
      {items.map((item, i) => (
        <Text key={i} gutter="none">{`• ${item}`}</Text>
      ))}
    </Stack>
  )
}
