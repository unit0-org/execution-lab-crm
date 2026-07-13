'use client'

import { Popover } from '@/ui/molecules/Popover'
import { Stack } from '@/ui/layout/Stack'
import { useToggle } from '@/ui/molecules/useToggle'
import { OfferMenuTrigger } from './OfferMenuTrigger'
import { ShareOfferMenuItem } from './ShareOfferMenuItem'
import { ExportOfferMenuItem } from './ExportOfferMenuItem'
import { DeleteOfferMenuItem } from './DeleteOfferMenuItem'

// An offer card's menu. Share/delete open dialogs the offers list owns.
export function OfferCardMenu({ offer, onShare, onRemove }) {
  const pop = useToggle()
  const trigger = <OfferMenuTrigger onClick={pop.toggle} />

  const ask = (open) => () => {
    pop.hide()
    open(offer)
  }

  return (
    <Popover open={pop.open} onClose={pop.hide} trigger={trigger} align="end">
      <Stack gap="sm">
        <ShareOfferMenuItem onClick={ask(onShare)} />
        <ExportOfferMenuItem offerId={offer.id} onDone={pop.hide} />
        <DeleteOfferMenuItem onClick={ask(onRemove)} />
      </Stack>
    </Popover>
  )
}
