import { redirect, notFound } from 'next/navigation'
import { currentPortalMember } from '@/lib/portalMember/controllers'
import { memberCanUseTool } from '@/lib/portalTool/controllers'
import { getOffer, listInputs } from '@/lib/offerGenerator/controllers'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { OfferLeversView } from '../components/OfferLeversView'

// Gate the tool, resolve the offer (404 if it isn't the member's), and load
// its inputs so the configurator hydrates scoped to that offer.
export async function OfferConfiguratorServer({ params }) {
  const member = await currentPortalMember()
  const granted = member && await memberCanUseTool(member, 'offer-levers')

  if (!granted) redirect(portalRoutePath('/tools'))

  const { offerId } = await params
  const offer = await getOffer(member.contactId, offerId)

  if (!offer) notFound()

  const initial = await listInputs(member.contactId, offerId)
  const version = {
    version_major: offer.version_major,
    version_minor: offer.version_minor
  }

  return <OfferLeversView initial={initial} offerId={offerId}
    offerName={offer.name} offerVersion={version} />
}
