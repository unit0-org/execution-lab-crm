'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { TextField } from '@/ui/atoms/TextField'
import { useOfferName } from '../hooks/useOfferName'
import { useOfferVersion } from '../hooks/useOfferVersion'
import { OfferVersionControl } from './OfferVersionControl'
import { ShareOfferButton } from './ShareOfferButton'

// The configurator header: the offer's editable name and version on one
// row — the name grows, the version sits at content width beside it.
export function OfferLeversHeader({ offerId, name, version }) {
  const offer = useOfferName(offerId, name)
  const ver = useOfferVersion(offerId, version)

  return (
    <GrowRow align="end">
      <TextField label="Offer name" value={offer.name} autoFocus
        placeholder="Untitled offer"
        onChange={offer.onChange} onBlur={offer.save} />
      <OfferVersionControl version={ver.version} onBump={ver.bump} />
      <ShareOfferButton offerId={offerId} />
    </GrowRow>
  )
}
