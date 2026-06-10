import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { LandingFooter } from '@/app/(public)/components/LandingFooter'

export const metadata = { title: 'The Execution Lab — Cohorts' }

export default function PortalLayout({ children }) {
  return (
    <Page width="wide">
      <Stack gap="lg">
        {children}
        <LandingFooter />
      </Stack>
    </Page>
  )
}
