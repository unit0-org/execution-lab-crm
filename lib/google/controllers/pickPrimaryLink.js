// Pick the link on the primary Google account, else the first link.
export function pickPrimaryLink(links, primaryAccountId) {
  if (!links.length) return null

  const onPrimary = links.find(
    (l) => l.google_account_id === primaryAccountId
  )

  return onPrimary || links[0]
}
