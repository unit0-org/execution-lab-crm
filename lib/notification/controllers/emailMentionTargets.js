import { listMentionableMembers }
  from '@/lib/org/controllers/listMentionableMembers'
import { sendMentionEmail } from './sendMentionEmail'
import { mentionVars } from './mentionVars'

// Email each mentioned member (best-effort), resolving their address from
// the member directory.
export async function emailMentionTargets(input, targets) {
  const members = await listMentionableMembers()
  const byId = new Map(members.map((m) => [m.userId, m]))
  const vars = mentionVars(input)

  for (const userId of targets) {
    const member = byId.get(userId)

    if (member) await sendMentionEmail(member, vars)
  }
}
