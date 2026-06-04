'use client'

import { Stack } from '@/ui/layout/Stack'
import { SecretField } from './SecretField'
import { useSecretsStatus } from '../hooks/useSecretsStatus'

export function IntegrationsView() {
  const { status, reload } = useSecretsStatus()

  return (
    <Stack gap="sm">
      <SecretField kind="stripe_secret_key" label="Stripe secret key"
        configured={status.stripe_secret_key} onSaved={reload} />
      <SecretField kind="stripe_webhook_secret"
        label="Stripe webhook secret"
        configured={status.stripe_webhook_secret} onSaved={reload} />
    </Stack>
  )
}
