import { Stack } from '@/ui/layout/Stack'
import { EmptyState } from '@/ui/molecules/EmptyState'
import { OfferReadBlock } from './OfferReadBlock'

// The pasted-back generated offers, each as a text block; empty state when
// none were added.
export function OfferReadBlocks({ blocks }) {
  if (!blocks.length)
    return (
      <EmptyState title="No generated offers"
        message="None were added yet." />
    )

  return (
    <Stack gap="sm">
      {blocks.map((block, i) => (
        <OfferReadBlock key={i} block={block} />
      ))}
    </Stack>
  )
}
