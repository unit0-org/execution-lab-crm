import { redirect } from 'next/navigation'
import { currentPortalMember } from '@/lib/portalMember/controllers'
import { memberCanUseTool } from '@/lib/portalTool/controllers'
import { listInputs } from '@/lib/offerGenerator/controllers'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { OfferLeversView } from './components/OfferLeversView'

// Re-gate the tool by URL: only a member granted 'offer-levers' (or an
// owner) may enter; anyone else bounces back to the tools list. Loads the
// member's saved inputs so the view hydrates with them.
export async function OfferLeversServer() {
  const member = await currentPortalMember()
  const granted = member && await memberCanUseTool(member, 'offer-levers')

  if (!granted) redirect(portalRoutePath('/tools'))

  const initial = await listInputs(member.contactId)

  return <OfferLeversView initial={initial} />
}
