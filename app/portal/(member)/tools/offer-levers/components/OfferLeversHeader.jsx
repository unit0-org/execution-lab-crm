'use client'

import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { useOfferName } from '../hooks/useOfferName'
import { useOfferVersion } from '../hooks/useOfferVersion'
import { OfferVersionControl } from './OfferVersionControl'

// The configurator header: the offer's editable name and version.
export function OfferLeversHeader({ offerId, name, version }) {
  const offer = useOfferName(offerId, name)
  const ver = useOfferVersion(offerId, version)

  return (
    <Stack gap="md">
      <TextField label="Offer name" value={offer.name} autoFocus
        placeholder="Untitled offer"
        onChange={offer.onChange} onBlur={offer.save} />
      <OfferVersionControl version={ver.version} onBump={ver.bump} />
    </Stack>
  )
}
