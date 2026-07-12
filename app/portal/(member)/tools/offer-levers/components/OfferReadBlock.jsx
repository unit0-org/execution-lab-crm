import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { ActiveTag } from './ActiveTag'
import { Paragraphs } from './Paragraphs'
import { toParagraphs } from '../toParagraphs'

// One generated offer: an "active" tag when it's currently selling, then its
// text as paragraphs.
export function OfferReadBlock({ block }) {
  return (
    <Card>
      <Stack gap="xs">
        <ActiveTag active={block.active} />
        <Paragraphs items={toParagraphs(block.text)} />
      </Stack>
    </Card>
  )
}
