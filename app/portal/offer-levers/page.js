import { Page } from '@/ui/layout/Page'
import { OfferLeversDoc } from './components/OfferLeversDoc'
import { LEAD } from './lead'
import framework from './data/framework.json'

export const metadata = { title: 'Offer levers', description: LEAD }

export default function OfferLeversPage() {
  return (
    <Page width="narrow">
      <OfferLeversDoc doc={framework} />
    </Page>
  )
}
