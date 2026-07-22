import { ContactMergeDismissal } from '../models'
import { pairKey } from '../pairKey'

// The set of dismissed contact-pair keys, for suppressing suggestions.
export async function dismissedPairKeys() {
  const rows = await ContactMergeDismissal.findAll({
    attributes: ['contact_a_id', 'contact_b_id']
  })

  return new Set(rows.map((r) => pairKey(r.contact_a_id, r.contact_b_id)))
}
