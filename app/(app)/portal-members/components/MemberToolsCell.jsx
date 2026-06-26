import { MemberToolToggles } from './MemberToolToggles'

// The Tools cell. A revoked member can't sign in, so we don't offer
// toggles — grants are kept but shown as a dash.
export function MemberToolsCell({ member, tools }) {
  if (member.status === 'revoked') return '—'

  return (
    <MemberToolToggles contactId={member.contactId} tools={tools}
      granted={member.toolKeys} />
  )
}
