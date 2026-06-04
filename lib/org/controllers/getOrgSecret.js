import { OrganizationSecret } from '../models'
import { decrypt } from '@/lib/secrets/cipher'

// An organization's decrypted integration secret, or null if unset.
export async function getOrgSecret(organizationId, kind) {
  const row = await OrganizationSecret.findOne({
    where: { organization_id: organizationId, kind }
  })

  return row ? decrypt(row.ciphertext) : null
}
