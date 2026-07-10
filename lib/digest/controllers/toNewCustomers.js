import { sevenDaysAgo } from './recentWindow'
import { collectBecame } from './collectBecame'
import { toNewCustomer } from './toNewCustomer'
import { loadContactNames } from '@/lib/dashboard/controllers/loadContactNames'

// Contacts whose customer-crossing moment fell in the last 7 days, named
// and labelled with what tipped them over.
export async function toNewCustomers(purchases, registrations) {
  const cutoff = sevenDaysAgo()
  const fresh = [...collectBecame(purchases, registrations).values()]
    .map(toNewCustomer)
    .filter((e) => e.becameAt >= cutoff)
  const names = await loadContactNames(fresh.map((e) => e.contactId))

  return fresh.map((e) => ({
    ...e,
    name: names.get(e.contactId)?.name || 'Unknown'
  }))
}
