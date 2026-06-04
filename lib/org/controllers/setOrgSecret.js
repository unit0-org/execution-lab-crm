import { OrganizationSecret } from '../models'
import { encrypt } from '@/lib/secrets/cipher'

// Store (or replace) an organization's encrypted integration secret.
export async function setOrgSecret(organizationId, kind, value) {
  if (!value) return { error: 'A value is required' }

  await OrganizationSecret.upsert({
    organization_id: organizationId,
    kind,
    ciphertext: encrypt(value)
  })

  return { ok: true }
}
