'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { Stack } from '@/ui/layout/Stack'
import { TextField } from '@/ui/atoms/TextField'
import { PaletteResults } from './PaletteResults'
import { usePalette } from '../hooks/usePalette'

const FIND = 'Find someone…'

export function CommandPalette({ open, people, onPick, onAdd, onClose }) {
  const p = usePalette(people)
  const close = () => { p.clear(); onClose() }
  const pick = (id) => { p.clear(); onPick(id) }
  const add = () => { p.clear(); onAdd() }

  return (
    <TitledModal open={open} title="Search" onClose={close}>
      <Stack gap="md">
        <TextField value={p.query} onChange={p.onType} placeholder={FIND}
          autoComplete="off" />
        <PaletteResults people={p.results} onPick={pick} onAdd={add} />
      </Stack>
    </TitledModal>
  )
}
