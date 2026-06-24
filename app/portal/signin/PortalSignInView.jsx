'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { GoogleSignIn } from './components/GoogleSignIn'
import { MagicLinkForm } from './components/MagicLinkForm'
import { SignInStatus } from './components/SignInStatus'
import { useSignInStatus } from './hooks/useSignInStatus'

export function PortalSignInView() {
  const status = useSignInStatus()

  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Heading level={2}>Member sign in</Heading>
        <Text size="sm">Use the email you were invited with.</Text>
      </Stack>
      <SignInStatus status={status} />
      <GoogleSignIn />
      <MagicLinkForm />
    </Stack>
  )
}
