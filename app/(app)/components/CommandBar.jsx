'use client'

import { Topbar } from '@/ui/layout/Topbar'
import { GrowRow } from '@/ui/layout/GrowRow'
import { SearchTrigger } from '@/ui/molecules/SearchTrigger'
import { Button } from '@/ui/atoms/Button'
import { CommandOverlays } from './CommandOverlays'
import { useCommandBar } from '../hooks/useCommandBar'

const PLACEHOLDER = 'Search people…'

export function CommandBar() {
  const bar = useCommandBar()

  return (
    <>
      <Topbar>
        <GrowRow>
          <SearchTrigger placeholder={PLACEHOLDER} hint="Ctrl K"
            onClick={bar.palette.show} />
          <Button tone="primary" onClick={bar.log.show}>
            Log note
          </Button>
        </GrowRow>
      </Topbar>
      <CommandOverlays bar={bar} />
    </>
  )
}
