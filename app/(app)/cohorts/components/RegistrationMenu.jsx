'use client'

import { Popover } from '@/ui/molecules/Popover'
import { Stack } from '@/ui/layout/Stack'
import { useToggle } from '@/ui/molecules/useToggle'
import { MenuTrigger } from './MenuTrigger'
import { MarkPaidMenuItem } from './MarkPaidMenuItem'
import { CopyPayLinkMenuItem } from './CopyPayLinkMenuItem'
import { NudgeMenuItem } from './NudgeMenuItem'

// A three-dots menu of operations for one pending registrant.
export function RegistrationMenu({ registrationId }) {
  const pop = useToggle()
  const trigger = <MenuTrigger onClick={pop.toggle} />

  return (
    <Popover open={pop.open} onClose={pop.hide} trigger={trigger} align="end">
      <Stack gap="sm">
        <MarkPaidMenuItem registrationId={registrationId} onDone={pop.hide} />
        <CopyPayLinkMenuItem registrationId={registrationId}
          onDone={pop.hide} />
        <NudgeMenuItem registrationId={registrationId} onDone={pop.hide} />
      </Stack>
    </Popover>
  )
}
