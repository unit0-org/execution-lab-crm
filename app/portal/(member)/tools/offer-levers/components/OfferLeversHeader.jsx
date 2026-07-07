'use client'

import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { Text } from '@/ui/atoms/Text'
import { useOfferName } from '../hooks/useOfferName'

// The configurator header: the offer's editable name and a blurb.
export function OfferLeversHeader({ offerId, name }) {
  const offer = useOfferName(offerId, name)

  return (
    <Stack gap="xs">
      <TextField label="Offer name" value={offer.name} autoFocus
        placeholder="Untitled offer"
        onChange={offer.onChange} onBlur={offer.save} />
      <Text size="sm" tone="muted">
        Describe your offer, set the structural levers, then copy a
        ready-to-run prompt that redesigns it into three variations.
      </Text>
    </Stack>
  )
}
