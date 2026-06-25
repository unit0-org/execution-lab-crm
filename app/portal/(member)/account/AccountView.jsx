import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { greetName } from './greetName'

// The signed-in member home: a greeting pointing to the member sections.
export function AccountView({ name }) {
  return (
    <Stack gap="lg">
      <Heading level={2}>Welcome, {greetName(name)}</Heading>
      <Text size="sm">
        Find your cohort notes, recordings and resources under Resources,
        and your invoices under Billing.
      </Text>
    </Stack>
  )
}
