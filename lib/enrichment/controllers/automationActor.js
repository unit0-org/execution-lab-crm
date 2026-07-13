import { memberActorByEmail }
  from '@/lib/org/controllers/memberActorByEmail'

// The team member the automated import writes as. Same MCP_AUTHOR_EMAIL the
// MCP integration uses, so a transcript note reads the same whether it
// arrived through the cron or through the assistant. Null when unset.
export function automationActor() {
  return memberActorByEmail(process.env.MCP_AUTHOR_EMAIL)
}
