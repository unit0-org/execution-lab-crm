import { Text } from '@/ui/atoms/Text'

// Shown after a successful join — replaces the form so there's no JSX
// conditional at the call site (Story 3.1 confirmation).
export function WaitlistThanks() {
  return (
    <Text>
      You&apos;re on the list. We&apos;ll email you when a spot opens.
    </Text>
  )
}
