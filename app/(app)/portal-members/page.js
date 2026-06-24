import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { PortalMembersPageServer } from './PortalMembersPageServer'

export const dynamic = 'force-dynamic'

export default function PortalMembersPage() {
  return (
    <Page>
      <Stack gap="md">
        <PortalMembersPageServer />
      </Stack>
    </Page>
  )
}
