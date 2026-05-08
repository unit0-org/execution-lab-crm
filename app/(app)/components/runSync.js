export async function runSync(action, accountId, toast, onMutate) {
  const fd = new FormData()
  fd.set('account_id', accountId)
  const res = await action(fd)
  if (res?.ok === false) toast.push({ tone: 'error', message: res.error || 'Sync failed' })
  else toast.push({ tone: 'success', message: 'Account synced' })
  onMutate?.()
}
