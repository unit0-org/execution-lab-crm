'use client'

import { useSearchParams } from 'next/navigation'
import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { Stack } from '@/ui/layout/Stack'
import { SignInForm } from './SignInForm'
import { LoginError } from './LoginError'

export function LoginView() {
  const params = useSearchParams()
  const next = params.get('next') || '/dashboard'

  return (
    <Page width="narrow">
      <Heading gutter="sm">Execution Lab CRM</Heading>
      <Text tone="muted" gutter="lg">Sign in to continue.</Text>
      <Stack gap="md">
        <SignInForm next={next} />
        <LoginError message={params.get('error')} />
      </Stack>
    </Page>
  )
}
