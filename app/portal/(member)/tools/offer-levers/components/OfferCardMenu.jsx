'use client'

import { Popover } from '@/ui/molecules/Popover'
import { Stack } from '@/ui/layout/Stack'
import { useToggle } from '@/ui/molecules/useToggle'
import { OfferMenuTrigger } from './OfferMenuTrigger'
import { ExportOfferMenuItem } from './ExportOfferMenuItem'
import { DeleteOfferMenuItem } from './DeleteOfferMenuItem'

// An offer card's three-dot menu: export the offer PDF or delete the offer.
export function OfferCardMenu({ offer, onRemove }) {
  const pop = useToggle()
  const trigger = <OfferMenuTrigger onClick={pop.toggle} />

  const remove = () => {
    pop.hide()
    onRemove(offer)
  }

  return (
    <Popover open={pop.open} onClose={pop.hide} trigger={trigger} align="end">
      <Stack gap="sm">
        <ExportOfferMenuItem offerId={offer.id} onDone={pop.hide} />
        <DeleteOfferMenuItem onClick={remove} />
      </Stack>
    </Popover>
  )
}
