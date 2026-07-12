import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { DigestRows } from './DigestRows'

// A titled digest section: its heading over the rows (or an empty note).
export function DigestSection({ view }) {
  return (
    <Stack gap="sm">
      <Heading level={2} gutter="none">{view.title}</Heading>
      <DigestRows rows={view.rows} emptyText={view.emptyText} />
    </Stack>
  )
}
