import { Stack } from '@/ui/layout/Stack'
import { EmptyState } from '@/ui/molecules/EmptyState'
import { OfferRow } from './OfferRow'

// The offers as rows, or an empty state prompting the first one.
export function OfferRows({ offers, onRename, onRemove }) {
  if (!offers.length)
    return (
      <EmptyState title="No offers yet"
        message="Use + to create your first offer." />
    )

  return (
    <Stack gap="sm">
      {offers.map((offer) => (
        <OfferRow key={offer.id} offer={offer}
          onRename={onRename} onRemove={onRemove} />
      ))}
    </Stack>
  )
}
