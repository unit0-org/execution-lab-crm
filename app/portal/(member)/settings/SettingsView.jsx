'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { AppearanceControls } from './components/AppearanceControls'

// The member's settings: appearance only, for now.
export function SettingsView() {
  return (
    <Stack gap="lg">
      <Heading level={2}>Settings</Heading>
      <AppearanceControls />
    </Stack>
  )
}
