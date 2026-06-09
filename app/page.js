import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { LandingFooter } from './(public)/components/LandingFooter'

const PURPOSE =
  'Execution Lab CRM is a customer-relationship manager for ' +
  'tracking contacts, meetings, events, purchases and invoices ' +
  'for an organization. It can sync contacts and calendar from ' +
  'Google so your records stay up to date.'

export default function LandingPage() {
  return (
    <Page width="narrow">
      <Stack gap="lg">
        <Heading>Execution Lab CRM</Heading>
        <Text>{PURPOSE}</Text>
        <ButtonLink href="/login">Sign in</ButtonLink>
        <LandingFooter />
      </Stack>
    </Page>
  )
}
