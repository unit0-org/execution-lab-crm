'use client'

import { Stack } from '@/ui/layout/Stack'
import { EndRow } from '@/ui/layout/EndRow'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { useGoogleAccounts } from '../hooks/useGoogleAccounts'
import { GoogleAccountsTable } from './GoogleAccountsTable'

export function GoogleContactsView() {
  const { accounts, reload } = useGoogleAccounts()

  return (
    <Stack gap="md">
      <SectionHeader title="Google Contacts" />
      <EndRow>
        <ButtonLink href="/api/google/connect">Connect account</ButtonLink>
      </EndRow>
      <GoogleAccountsTable accounts={accounts} onChanged={reload} />
    </Stack>
  )
}
