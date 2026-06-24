import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'

const SECTIONS = ['Billing']

// Preview of the member sections shipping in later milestones.
export function ComingSoon() {
  return (
    <Stack gap="xs">
      {SECTIONS.map((section) => (
        <MonoLabel key={section} size={11}>{section} · coming soon</MonoLabel>
      ))}
    </Stack>
  )
}
