import { Stack } from '@/ui/layout/Stack'
import { MetaRow } from '@/ui/molecules/MetaRow'
import { EmptyState } from '@/ui/molecules/EmptyState'

// Context / levers as label/value rows; an empty state when there are none.
export function OfferReadRows({ rows }) {
  if (!rows.length)
    return <EmptyState title="Nothing here" message="No details were added." />

  return (
    <Stack gap="xs">
      {rows.map((row) => (
        <MetaRow key={row.label} label={row.label} value={row.value} />
      ))}
    </Stack>
  )
}
