import { getOrgSecret } from '@/lib/org/controllers/getOrgSecret'

// The org's Resend key, falling back to the platform-wide env key —
// mirrors how the Stripe key resolves (org secret, then env).
export async function resendApiKey(organizationId) {
  const stored = await getOrgSecret(organizationId, 'resend_api_key')

  return stored || process.env.RESEND_API_KEY || null
}
