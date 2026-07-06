import { Stack } from '@/ui/layout/Stack'
import { Paragraph } from './Paragraph'

// A run of paragraph strings. Renders nothing when the run is empty.
export function Paragraphs({ items }) {
  if (!items || !items.length) return null

  return (
    <Stack gap="sm">
      {items.map((text, i) => <Paragraph key={i} text={text} />)}
    </Stack>
  )
}
