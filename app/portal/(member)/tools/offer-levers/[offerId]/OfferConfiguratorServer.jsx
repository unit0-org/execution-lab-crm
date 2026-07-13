import { redirect } from 'next/navigation'
import { currentPortalMember } from '@/lib/portalMember/controllers'
import { memberCanUseTool } from '@/lib/portalTool/controllers'
import { getOffer, listInputs } from '@/lib/offerGenerator/controllers'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { OfferLeversView } from '../components/OfferLeversView'
import { SharedOfferServer } from './SharedOfferServer'
import { offerVersionOf } from './offerVersionOf'

// Gate the tool, then resolve the offer: the owner gets the editable
// configurator; a member it's shared with gets the read-only view; anyone
// else 404s (inside SharedOfferServer).
export async function OfferConfiguratorServer({ params }) {
  const member = await currentPortalMember()
  const granted = member && await memberCanUseTool(member, 'offer-levers')

  if (!granted) redirect(portalRoutePath('/tools'))

  const { offerId } = await params
  const offer = await getOffer(member.contactId, offerId)

  if (!offer) return <SharedOfferServer member={member} offerId={offerId} />

  const initial = await listInputs(member.contactId, offerId)

  return <OfferLeversView initial={initial} offerId={offerId}
    offerName={offer.name} offerVersion={offerVersionOf(offer)} />
}
