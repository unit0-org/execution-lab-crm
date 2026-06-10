import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'

export const metadata = { title: 'The Execution Lab — Cohorts' }

export default function PortalLayout({ children }) {
  return (
    <Page width="wide">
      <Stack gap="lg">
        {children}
      </Stack>
    </Page>
  )
}
