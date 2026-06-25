import { currentPortalMember } from '@/lib/portalMember/controllers'
import { listInvoicesForMember } from '@/lib/invoice/controllers'
import { BillingView } from './components/BillingView'

// The member's billing page: the invoices issued to them. The shell gate
// guarantees a signed-in member.
export async function BillingServer() {
  const member = await currentPortalMember()
  const invoices = member
    ? await listInvoicesForMember(member.contactId)
    : []

  return <BillingView invoices={invoices} />
}
