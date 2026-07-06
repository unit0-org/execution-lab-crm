'use client'

import { Stack } from '@/ui/layout/Stack'
import { useOfferLevers } from '../hooks/useOfferLevers'
import { OfferLeversHeader } from './OfferLeversHeader'
import { OfferContextSection } from './OfferContextSection'
import { LeversSection } from './LeversSection'
import { CopyPromptBar } from './CopyPromptBar'

export function OfferLeversView({ initial }) {
  const offer = useOfferLevers(initial)
  const on = {
    field: offer.setField, add: offer.addItem,
    update: offer.updateItem, remove: offer.removeItem
  }

  return (
    <Stack gap="lg">
      <OfferLeversHeader />
      <OfferContextSection values={offer.values} lists={offer.lists}
        saved={offer.saved} on={on} />
      <LeversSection values={offer.values} onField={offer.setLever} />
      <CopyPromptBar onCopy={offer.copyPrompt} />
    </Stack>
  )
}
