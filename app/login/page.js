import { Page } from '@/ui/Page'
import { Heading } from '@/ui/Heading'
import { Text } from '@/ui/Text'
import { Stack } from '@/ui/Stack'
import { SignInForm } from './components/SignInForm'
import { LoginError } from './components/LoginError'

export const dynamic = 'force-dynamic'

export default async function LoginPage({ searchParams }) {
  const params = await searchParams
  const next = params?.next || '/contacts'

  return (
    <Page>
      <Heading gutter="sm">Execution Lab CRM</Heading>
      <Text tone="muted" gutter="lg">Sign in to continue.</Text>
      <Stack gap="md">
        <SignInForm next={next} />
        <LoginError message={params?.error} />
      </Stack>
    </Page>
  )
}
