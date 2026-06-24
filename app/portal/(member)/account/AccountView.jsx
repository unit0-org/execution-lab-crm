import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { ComingSoon } from './ComingSoon'
import { greetName } from './greetName'

// The signed-in member home (Milestone 1): a greeting and a preview of the
// sections shipping next.
export function AccountView({ name }) {
  return (
    <Stack gap="lg">
      <Heading level={2}>Welcome, {greetName(name)}</Heading>
      <Text size="sm">
        Your billing, cohort notes, recordings and resources will live here.
      </Text>
      <ComingSoon />
    </Stack>
  )
}
