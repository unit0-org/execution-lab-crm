'use client'

import { Form } from '@/ui/molecules/Form'
import { FormError } from '@/ui/molecules/FormError'
import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { TextField } from '@/ui/atoms/TextField'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { useAcceptInvite } from '../hooks/useAcceptInvite'

export function JoinForm({ token }) {
  const { action, error } = useAcceptInvite()

  return (
    <Page width="narrow">
      <Form action={action}>
        <Stack gap="md">
          <Heading gutter="none">Name your organization</Heading>
          <Text tone="muted">Set up your own space on the CRM.</Text>
          <input type="hidden" name="token" value={token} />
          <TextField name="name" placeholder="Organization name" autoFocus />
          <SubmitButton size="lg" block>Create organization</SubmitButton>
          <FormError message={error} />
        </Stack>
      </Form>
    </Page>
  )
}
