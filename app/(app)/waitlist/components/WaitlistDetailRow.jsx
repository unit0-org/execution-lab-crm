import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'

// One labelled value: a mono caption above the applicant's answer.
export function WaitlistDetailRow({ label, children }) {
  return (
    <Stack gap="xs">
      <MonoLabel caps>{label}</MonoLabel>
      {children}
    </Stack>
  )
}
