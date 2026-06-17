import { sequelize } from '@/lib/db/sequelize'
import { hasIdentity } from './identity'
import { upsertContactWithAdds } from './upsertContactWithAdds'

// Op3 standalone: find-or-create a contact by identity (email → name →
// create), then add its extra emails/phones/linkedin. Returns
// { id, created, matchedBy }.
export function upsertContactOp(input) {
  if (!hasIdentity(input)) return { error: 'An email or name is required' }

  return sequelize.transaction(async (t) => {
    const c = await upsertContactWithAdds(input, input, t)

    return { id: c.id, created: c.created, matchedBy: c.matchedBy }
  })
}
