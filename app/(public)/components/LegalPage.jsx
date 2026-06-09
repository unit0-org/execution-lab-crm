import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { LandingFooter } from './LandingFooter'

// Shared wrapper for the public legal pages: title + sections + footer.
export function LegalPage({ title, children }) {
  return (
    <Page width="narrow">
      <Stack gap="lg">
        <Heading>{title}</Heading>
        {children}
        <LandingFooter />
      </Stack>
    </Page>
  )
}
