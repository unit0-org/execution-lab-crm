'use client'

import { Modal } from '@/ui/organisms/Modal'
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
    <Modal open={open} onClose={close}>
      <Stack gap="md">
        <TextField value={p.query} onChange={p.onType} placeholder={FIND}
          autoComplete="off" />
        <PaletteResults people={p.results} onPick={pick} onAdd={add} />
      </Stack>
    </Modal>
  )
}
