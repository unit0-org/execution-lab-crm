'use client'

import { Topbar } from '@/ui/layout/Topbar'
import { Hamburger } from '@/ui/layout/Hamburger'
import { SearchTrigger } from '@/ui/molecules/SearchTrigger'
import { Button } from '@/ui/atoms/Button'
import { CommandOverlays } from './CommandOverlays'
import { useCommandBar } from '../hooks/useCommandBar'

const PLACEHOLDER = 'Search people…'

export function CommandBar({ onMenu }) {
  const bar = useCommandBar()

  return (
    <>
      <Topbar>
        <Hamburger onClick={onMenu} />
        <SearchTrigger placeholder={PLACEHOLDER} hint="Ctrl K"
          onClick={bar.palette.show} />
        <Button tone="default" onClick={bar.log.show}>
          Log note
        </Button>
      </Topbar>
      <CommandOverlays bar={bar} />
    </>
  )
}
