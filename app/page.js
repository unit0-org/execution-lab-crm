import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { SignOutForm } from '@/ui/molecules/SignOutForm'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

function Home({ email }) {
  return (
    <Page>
      <Heading gutter="sm">Execution Lab CRM</Heading>
      <Text tone="muted" gutter="lg">Signed in as {email}.</Text>
      <Stack gap="md">
        <Link href="/contacts">Contacts →</Link>
        <SignOutForm>Sign out</SignOutForm>
      </Stack>
    </Page>
  )
}

export default async function HomePage() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  return <Home email={data.user?.email} />
}
