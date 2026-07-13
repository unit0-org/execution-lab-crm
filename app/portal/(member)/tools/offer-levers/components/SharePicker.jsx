'use client'

import { Stack } from '@/ui/layout/Stack'
import { EndRow } from '@/ui/layout/EndRow'
import { Button } from '@/ui/atoms/Button'
import { Autocomplete } from '@/ui/molecules/Autocomplete'
import { PickedTokens } from './PickedTokens'

// Add people to an offer: search the portal, stage as many as you like, then
// Share — which grants view + comment access and emails each of them.
export function SharePicker({ shares }) {
  return (
    <Stack gap="sm">
      <Autocomplete label="Add people" value={shares.query}
        onType={shares.onType} options={shares.options}
        onPick={shares.onPick} hint="Search by name or email" />
      <PickedTokens people={shares.picked} onRemove={shares.onUnpick} />
      <EndRow>
        <Button tone="primary" onClick={shares.onShare}
          loading={shares.sharing} disabled={!shares.picked.length}>
          Share
        </Button>
      </EndRow>
    </Stack>
  )
}
