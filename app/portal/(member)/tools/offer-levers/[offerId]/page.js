import { OfferConfiguratorServer } from './OfferConfiguratorServer'

export const dynamic = 'force-dynamic'

export default function OfferConfiguratorPage({ params }) {
  return <OfferConfiguratorServer params={params} />
}
