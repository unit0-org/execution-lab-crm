'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { EndRow } from '@/ui/layout/EndRow'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { SyncControl } from '@/ui/molecules/SyncControl'
import { useSyncContacts } from '../hooks/useSyncContacts'
import { GoogleAccountsTable } from './GoogleAccountsTable'

export function GoogleContactsView({ accounts }) {
  const router = useRouter()
  const reload = () => router.refresh()
  const { syncing, sync } = useSyncContacts(reload)
  const label = syncing ? 'Syncing…' : 'Sync contacts from Google'

  return (
    <Stack gap="md">
      <SectionHeader title="Google Contacts" />
      <EndRow>
        <ButtonLink href="/api/google/connect">Connect account</ButtonLink>
      </EndRow>
      <SyncControl label={label} syncing={syncing} onSync={sync} />
      <GoogleAccountsTable accounts={accounts} onChanged={reload} />
    </Stack>
  )
}
