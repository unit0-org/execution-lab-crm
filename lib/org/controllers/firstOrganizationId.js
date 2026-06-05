import { Organization } from '../models'

// The (oldest) organization's id, for contexts without a user session
// such as MCP tool calls and the Stripe webhook.
export async function firstOrganizationId() {
  const org = await Organization.findOne({ order: [['created_at', 'ASC']] })

  return org ? org.id : null
}
