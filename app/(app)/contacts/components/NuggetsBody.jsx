'use client'

import { Stack } from '@/ui/layout/Stack'
import { useDisclosure } from '../hooks/useDisclosure'
import { NuggetsPanel } from './NuggetsPanel'
import { NuggetsToggle } from './NuggetsToggle'

// Starts collapsed, previewing the newest facts as rows; expanding reveals
// every fact in the full card layout.
export function NuggetsBody({ nuggets, onChanged }) {
  const { open, toggle } = useDisclosure()

  return (
    <Stack gap="sm">
      <NuggetsPanel nuggets={nuggets} open={open} onChanged={onChanged} />
      <NuggetsToggle count={nuggets.length} open={open} onToggle={toggle} />
    </Stack>
  )
}
