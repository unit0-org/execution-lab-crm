import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { SignOutForm } from '@/ui/molecules/SignOutForm'

export default function HomePage() {
  return (
    <Page>
      <Heading gutter="sm">Execution Lab CRM</Heading>
      <Stack gap="md">
        <Link href="/contacts">Contacts →</Link>
        <SignOutForm>Sign out</SignOutForm>
      </Stack>
    </Page>
  )
}
