'use client'

import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useTheme } from '../hooks/useTheme'

// Appearance settings — the light/dark switch, moved here from the
// floating corner toggle.
export function AppearanceView() {
  const { dark, toggle } = useTheme()

  return (
    <Stack gap="md">
      <SectionHeader title="Appearance" />
      <Inline gap="sm">
        <Checkbox checked={dark} onChange={toggle} label="Dark mode" />
        <Text>Dark mode</Text>
      </Inline>
    </Stack>
  )
}
