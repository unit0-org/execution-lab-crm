import { memberActorByEmail }
  from '@/lib/org/controllers/memberActorByEmail'

// The team member behind an MCP call, so what the integration writes is
// attributed to a real person rather than to "the assistant". The email comes
// from the WorkOS token, or from MCP_AUTHOR_EMAIL for the static-token client.
// Null when the caller can't be tied to a claimed member.
export function callerActor(extra) {
  return memberActorByEmail(extra?.authInfo?.extra?.email)
}
