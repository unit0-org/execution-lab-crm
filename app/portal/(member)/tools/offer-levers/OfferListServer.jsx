import { redirect } from 'next/navigation'
import { currentPortalMember } from '@/lib/portalMember/controllers'
import { memberCanUseTool } from '@/lib/portalTool/controllers'
import { listOffersWithActive } from '@/lib/offerGenerator/controllers'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { OfferListView } from './components/OfferListView'

// Gate the tool (granted member or owner only), then load the member's
// offers for the list screen.
export async function OfferListServer() {
  const member = await currentPortalMember()
  const granted = member && await memberCanUseTool(member, 'offer-levers')

  if (!granted) redirect(portalRoutePath('/tools'))

  const offers = await listOffersWithActive(member.contactId)

  return <OfferListView initial={offers} />
}
