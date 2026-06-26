'use client'

import { Inline } from '@/ui/layout/Inline'
import { Popover } from '@/ui/molecules/Popover'
import { useToggle } from '@/ui/molecules/useToggle'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { LeverInfoButton } from './LeverInfoButton'
import { LeverInfo } from './LeverInfo'

// The lever's name with an info button that opens a popover explaining the
// dimension and each option.
export function LeverLabel({ lever }) {
  const pop = useToggle()
  const trigger = (
    <LeverInfoButton label={lever.label} onClick={pop.toggle} />
  )

  return (
    <Inline gap="xs" nowrap>
      <MonoLabel tone="muted" size={12}>{lever.label}</MonoLabel>
      <Popover open={pop.open} onClose={pop.hide} trigger={trigger}>
        <LeverInfo lever={lever} />
      </Popover>
    </Inline>
  )
}
