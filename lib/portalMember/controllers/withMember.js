import { currentPortalMember } from './currentPortalMember'

// Wrap a portal server action so it runs with the caller's contactId,
// resolved server-side. The action receives contactId as its first argument
// (then the client args); a caller without a contact gets a no-member error
// and the action never runs.
export function withMember(action) {
  return async (...args) => {
    const member = await currentPortalMember()

    if (!member?.contactId) return { error: 'No member' }

    return action(member.contactId, ...args)
  }
}
