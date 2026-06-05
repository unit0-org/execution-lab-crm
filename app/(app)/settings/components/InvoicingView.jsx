'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { SecretField } from './SecretField'
import { InvoicingForm } from './InvoicingForm'
import { useInvoiceSetting } from '../hooks/useInvoiceSetting'
import { useSecretsStatus } from '../hooks/useSecretsStatus'

export function InvoicingView() {
  const setting = useInvoiceSetting()
  const { status, reload } = useSecretsStatus()

  if (setting === undefined) return <Text>Loading…</Text>

  const data = setting || {}

  return (
    <Stack gap="md">
      <InvoicingForm setting={data} />
      <SecretField kind="resend_api_key" label="Resend API key"
        configured={status.resend_api_key} onSaved={reload} />
    </Stack>
  )
}
