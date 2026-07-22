'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { PaletteResults } from './PaletteResults'
import { usePalette } from '../hooks/usePalette'
import { usePaletteKeys } from '../hooks/usePaletteKeys'
import { useIsMobile } from '@/ui/molecules/useIsMobile'

const FIND = 'Search people or companies…'

export function CommandPalette({ open, people, onPick, onAdd, onClose }) {
  const palette = usePalette(people)
  const align = useIsMobile() ? 'top' : 'center'
  const close = () => { palette.clear(); onClose() }
  const pick = (href) => { palette.clear(); onPick(href) }
  const add = () => { palette.clear(); onAdd() }
  const onKeyDown = usePaletteKeys(palette.results, pick)

  return (
    <TitledModal open={open} title="Search" onClose={close} align={align}>
      <Stack gap="md">
        <TextField value={palette.query} onChange={palette.onType}
          onKeyDown={onKeyDown} placeholder={FIND} autoComplete="off" />
        <PaletteResults people={palette.results} onPick={pick} onAdd={add} />
      </Stack>
    </TitledModal>
  )
}
