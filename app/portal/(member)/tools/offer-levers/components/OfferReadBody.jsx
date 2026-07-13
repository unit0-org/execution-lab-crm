import { OfferReadRows } from './OfferReadRows'
import { OfferReadBlocks } from './OfferReadBlocks'
import { sectionRows } from '../sectionRows'

// Pick the body for a section: generated offers render as text blocks;
// everything else (context, levers) as label/value rows.
export function OfferReadBody({ section }) {
  if (section.blocks) return <OfferReadBlocks blocks={section.blocks} />

  return <OfferReadRows rows={sectionRows(section)} />
}
