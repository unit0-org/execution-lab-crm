import { showToast } from '@/ui/molecules/toastBus'
import { invitePortalMemberAction } from '../actions/invitePortalMember'

const succeeded = (r) => r.status === 'fulfilled' && !r.value?.error

const summarize = (results) => {
  const ok = results.filter(succeeded).length

  if (ok === results.length) return `Invited ${ok}`

  return `Invited ${ok} of ${results.length}`
}

// Invite every picked contact, toast a summary, then close and refresh.
export function runInvites(picked, { setBusy, onClose, router }) {
  setBusy(true)
  const calls = picked.map((p) => invitePortalMemberAction(p.value))

  return Promise.allSettled(calls)
    .then((results) => showToast(summarize(results)))
    .then(() => { onClose(); router.refresh() })
    .finally(() => setBusy(false))
}
