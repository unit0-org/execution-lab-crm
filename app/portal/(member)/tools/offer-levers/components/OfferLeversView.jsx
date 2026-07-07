'use client'

import { Stack } from '@/ui/layout/Stack'
import { useOfferLevers } from '../hooks/useOfferLevers'
import { OfferLeversHeader } from './OfferLeversHeader'
import { OfferContextSection } from './OfferContextSection'
import { LeversSection } from './LeversSection'
import { CopyPromptBar } from './CopyPromptBar'

export function OfferLeversView(props) {
  const { initial, offerId, offerName, offerVersion } = props
  const offer = useOfferLevers(initial, offerId)
  const on = {
    field: offer.setField, add: offer.add,
    update: offer.update, remove: offer.remove
  }

  return (
    <Stack gap="lg">
      <OfferLeversHeader offerId={offerId} name={offerName}
        version={offerVersion} />
      <OfferContextSection values={offer.values} lists={offer.lists}
        saved={offer.saved} on={on} />
      <LeversSection values={offer.values} onField={offer.setLever} />
      <CopyPromptBar onCopy={offer.copyPrompt} />
    </Stack>
  )
}
