import { createClient } from '@/lib/supabase/server'
import { Page } from '@/ui/Page'
import { Heading } from '@/ui/Heading'
import { Stack } from '@/ui/Stack'
import { useEnvironment } from './hooks/useEnvironment'
import { StatusList } from './components/StatusList'
import { ContactsLink } from './components/ContactsLink'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { name: env, version } = useEnvironment()

  return (
    <Page>
      <Heading gutter="lg">Execution Lab CRM — baseline OK</Heading>
      <Stack gap="lg">
        <StatusList env={env} version={version} user={user} />
        <ContactsLink />
      </Stack>
    </Page>
  )
}
