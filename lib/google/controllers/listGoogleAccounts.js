import { GoogleAccount } from '../models/GoogleAccount'

const FIELDS = [
  'id', 'email', 'is_primary',
  'contacts_sync_enabled', 'contacts_synced_at'
]

// The connected Google accounts, primary first then newest.
export async function listGoogleAccounts() {
  const rows = await GoogleAccount.findAll({
    attributes: FIELDS,
    order: [['is_primary', 'DESC'], ['created_at', 'DESC']]
  })

  return rows.map((row) => row.toJSON())
}
