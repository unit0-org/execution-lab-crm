import { findContactIdByEmail }
  from '@/lib/enrichment/controllers/findContactIdByEmail'

// Map counterpart addresses to existing contact ids, de-duplicated. We only
// attach mail to contacts already in the CRM — a stranger's address is
// skipped rather than spawning a junk contact from every sender.
export async function resolveMessageContacts(emails) {
  const ids = new Set()

  for (const email of emails) {
    const id = await findContactIdByEmail(email)

    if (id) ids.add(id)
  }

  return [...ids]
}
