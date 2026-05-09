// Calls the sync server action; the action returns as soon as the
// background work is queued via Next's after(). Toasts a kickoff
// hint so the user knows the request was accepted; the completion
// toast is owned by useSyncToastOnFinish.
export async function kickoffSync(action, accountId, toast) {
  const fd = new FormData()
  fd.set('account_id', accountId)
  const res = await action(fd)
  if (res?.ok === false) toast.push({ tone: 'error', message: res.error || 'Could not start sync' })
  else if (res?.alreadyRunning) toast.push({ tone: 'success', message: 'Already syncing…' })
  else toast.push({ tone: 'success', message: 'Sync started' })
}
