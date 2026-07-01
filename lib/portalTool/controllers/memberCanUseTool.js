import { memberHasTool } from './memberHasTool'

// Whether a member may open a tool: an owner may open every tool; everyone
// else needs the tool granted to their contact in the CRM admin.
export function memberCanUseTool(member, toolKey) {
  if (member.isOwner) return true

  return memberHasTool(member.contactId, toolKey)
}
