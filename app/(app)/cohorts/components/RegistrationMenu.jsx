'use client'

import { Popover } from '@/ui/molecules/Popover'
import { Stack } from '@/ui/layout/Stack'
import { useToggle } from '@/ui/molecules/useToggle'
import { MenuTrigger } from './MenuTrigger'
import { MarkPaidMenuItem } from './MarkPaidMenuItem'
import { CopyPayLinkMenuItem } from './CopyPayLinkMenuItem'
import { NudgeMenuItem } from './NudgeMenuItem'
import { ReservationMenuItems } from './ReservationMenuItems'

// A three-dots menu of operations for one pending registrant.
export function RegistrationMenu({ registration }) {
  const pop = useToggle()
  const trigger = <MenuTrigger onClick={pop.toggle} />
  const id = registration.id

  return (
    <Popover open={pop.open} onClose={pop.hide} trigger={trigger} align="end">
      <Stack gap="sm">
        <MarkPaidMenuItem registrationId={id} onDone={pop.hide}
          cohortId={registration.cohort_id} />
        <CopyPayLinkMenuItem registrationId={id} onDone={pop.hide} />
        <NudgeMenuItem registrationId={id} onDone={pop.hide} />
        <ReservationMenuItems registration={registration} onDone={pop.hide} />
      </Stack>
    </Popover>
  )
}
