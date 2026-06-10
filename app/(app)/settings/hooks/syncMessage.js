// Human summary of a contacts-sync result, for a toast.
export function syncMessage(result) {
  if (result?.error) return 'You are not allowed to sync contacts'

  if (result?.errors?.length) return result.errors[0]

  const count = result?.imported || 0

  return `Synced ${count} contact${count === 1 ? '' : 's'} from Google`
}
