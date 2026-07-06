import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { LandingFooter } from '../(public)/components/LandingFooter'
import { OfferLeversDoc } from './components/OfferLeversDoc'
import { LEAD } from './lead'
import framework from './data/framework.json'

export const metadata = { title: 'Offer levers', description: LEAD }

export default function OfferLeversPage() {
  return (
    <Page width="narrow">
      <Stack gap="lg">
        <OfferLeversDoc doc={framework} />
        <LandingFooter />
      </Stack>
    </Page>
  )
}
