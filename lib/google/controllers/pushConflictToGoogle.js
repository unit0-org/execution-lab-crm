import { Contact } from '@/lib/db/models'
import { getAccessToken } from '../getAccessToken'
import { updatePerson } from '../people'
import { googleUpdate } from './googleUpdate'
import { conflictLink } from './conflictLink'

// Push the winning CRM value of a conflict to Google so both match.
// No-op when the contact lacks a link/account for that conflict.
export async function pushConflictToGoogle(organizationId, conflict) {
  const { link, account } = await conflictLink(organizationId, conflict)

  if (!link || !account?.refresh_token) return

  const contact = await Contact.findOne({
    where: { organization_id: organizationId, id: conflict.contact_id }
  })
  const token = await getAccessToken(account.refresh_token)
  const { fields, updateMask } = googleUpdate(conflict.field, contact)

  await updatePerson(
    token, link.resource_name, link.etag, fields, updateMask
  )
}
