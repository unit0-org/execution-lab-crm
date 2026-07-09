'use client'

import { Stack } from '@/ui/layout/Stack'
import { Select } from '@/ui/atoms/Select'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { usePortalTheme } from '../hooks/usePortalTheme'
import { AutoSchedule } from './AutoSchedule'
import { THEME_MODES } from './themeModes'

// Appearance settings: the light/dark/auto theme mode and, in auto mode,
// the times it switches between them.
export function AppearanceControls() {
  const theme = usePortalTheme()

  return (
    <Stack gap="md">
      <SectionHeader title="Appearance" />
      <Select label="Theme" options={THEME_MODES}
        value={theme.mode} onChange={theme.onModeChange} />
      <AutoSchedule mode={theme.mode} darkAt={theme.darkAt}
        dayAt={theme.dayAt} onDarkAt={theme.onDarkAtChange}
        onDayAt={theme.onDayAtChange} />
    </Stack>
  )
}
