import { Page } from '@/ui/Page'
import { Heading } from '@/ui/Heading'
import { Text } from '@/ui/Text'
import { Stack } from '@/ui/Stack'
import { SignOutForm } from '@/ui/SignOutForm'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

function Home({ email }) {
  return (
    <Page>
      <Heading gutter="sm">Execution Lab CRM</Heading>
      <Text tone="muted" gutter="lg">Signed in as {email}.</Text>
      <Stack gap="md"><SignOutForm>Sign out</SignOutForm></Stack>
    </Page>
  )
}

export default function HomePage() {
  return createClient()
    .then((s) => s.auth.getUser())
    .then(({ data }) => <Home email={data.user?.email} />)
}
