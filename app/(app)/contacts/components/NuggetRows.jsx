import { Stack } from '@/ui/layout/Stack'
import { NuggetRow } from './NuggetRow'

// The collapsed preview: the newest few facts, as plain rows.
export function NuggetRows({ nuggets }) {
  return (
    <Stack gap="xs">
      {nuggets.map((nugget) => (
        <NuggetRow key={nugget.id} nugget={nugget} />
      ))}
    </Stack>
  )
}
