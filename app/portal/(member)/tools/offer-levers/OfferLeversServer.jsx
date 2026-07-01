import { redirect } from 'next/navigation'
import { currentPortalMember } from '@/lib/portalMember/controllers'
import { memberCanUseTool } from '@/lib/portalTool/controllers'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'
import { OfferLeversView } from './components/OfferLeversView'

// Re-gate the tool by URL: only a member granted 'offer-levers' (or an
// owner) may enter; anyone else bounces back to the tools list.
export async function OfferLeversServer() {
  const member = await currentPortalMember()
  const granted = member && await memberCanUseTool(member, 'offer-levers')

  if (!granted) redirect(portalRoutePath('/tools'))

  return <OfferLeversView />
}
