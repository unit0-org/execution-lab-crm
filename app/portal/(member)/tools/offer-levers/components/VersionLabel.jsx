'use client'

import { Inline } from '@/ui/layout/Inline'
import { Popover } from '@/ui/molecules/Popover'
import { useToggle } from '@/ui/molecules/useToggle'
import { FieldLabel } from '@/ui/atoms/FieldLabel'
import { LeverInfoButton } from './LeverInfoButton'
import { VersionInfo } from './VersionInfo'

// The "Version" field label with an info button whose popover explains how
// to version an offer.
export function VersionLabel() {
  const pop = useToggle()
  const trigger = (
    <LeverInfoButton label="versioning" onClick={pop.toggle} />
  )

  return (
    <Inline gap="xs" nowrap>
      <FieldLabel label="Version" />
      <Popover open={pop.open} onClose={pop.hide} trigger={trigger}
        align="end">
        <VersionInfo />
      </Popover>
    </Inline>
  )
}
