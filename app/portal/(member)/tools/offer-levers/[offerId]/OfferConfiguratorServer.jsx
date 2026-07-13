import { redirect } from 'next/navigation'
import { currentPortalMember } from '@/lib/portalMember/controllers'
import { memberCanUseTool } from '@/lib/portalTool/controllers'
import { getOffer, listInputs } from '@/lib/offerGenerator/controllers'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { OfferLeversView } from '../components/OfferLeversView'
import { SharedOfferServer } from './SharedOfferServer'
import { offerVersionOf } from './offerVersionOf'
import { loadDiscussion } from '../loadDiscussion'

// Gate the tool, then resolve the offer: the owner gets the editable
// configurator; a sharee the read-only view; else 404 (SharedOfferServer).
export async function OfferConfiguratorServer({ params }) {
  const member = await currentPortalMember()
  const granted = member && await memberCanUseTool(member, 'offer-levers')

  if (!granted) redirect(portalRoutePath('/tools'))

  const { offerId } = await params
  const offer = await getOffer(member.contactId, offerId)

  if (!offer) return <SharedOfferServer member={member} offerId={offerId} />

  const initial = await listInputs(member.contactId, offerId)
  const discussion = await loadDiscussion(member.contactId, offerId)

  return <OfferLeversView initial={initial} offerId={offerId}
    offerName={offer.name} offerVersion={offerVersionOf(offer)}
    discussion={discussion} viewerContactId={member.contactId} />
}
