'use client'

import { Stack } from '@/ui/layout/Stack'
import { TitledModal } from '@/ui/organisms/TitledModal'
import { useOfferShares } from '../hooks/useOfferShares'
import { SharePicker } from './SharePicker'
import { SharedWithTable } from './SharedWithTable'

// Owner dialog: add portal people to this offer (view + comment, emailing
// each), and see or revoke who it is already shared with. Open when an
// offer is passed — the offers list owns that state.
export function ShareOfferModal({ offer, onClose }) {
  const shares = useOfferShares(offer?.id)

  return (
    <TitledModal open={Boolean(offer)} title="Share offer" onClose={onClose}>
      <Stack gap="md">
        <SharePicker shares={shares} />
        <SharedWithTable people={shares.shared} onRemove={shares.onUnshare} />
      </Stack>
    </TitledModal>
  )
}
