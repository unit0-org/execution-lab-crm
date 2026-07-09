import { currentPortalMember } from '@/lib/portalMember/controllers'
import { memberCanUseTool } from '@/lib/portalTool/controllers'
import { offerPdfFor } from '../../offerPdfFor'
import { pdfResponse } from './pdfResponse'

export const runtime = 'nodejs'

// Export one member's offer (context, levers, generated offers) as a PDF.
// Gated to a member who holds the tool, and scoped to an offer they own.
export async function GET(request, { params }) {
  const member = await currentPortalMember()
  const granted = member && await memberCanUseTool(member, 'offer-levers')

  if (!granted) return new Response('Forbidden', { status: 403 })

  const { offerId } = await params
  const built = await offerPdfFor(member.contactId, offerId)

  if (!built) return new Response('Not found', { status: 404 })

  return pdfResponse(built.name, built.pdf)
}
