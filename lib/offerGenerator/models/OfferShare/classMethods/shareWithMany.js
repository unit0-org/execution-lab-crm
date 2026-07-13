// Share an offer with several contacts, and answer with only the ones that
// were newly granted access — so the caller emails nobody twice.
export async function shareWithMany(offerId, contactIds) {
  const added = []

  for (const contactId of contactIds) {
    const [, created] = await this.shareWith(offerId, contactId)

    if (created) added.push(contactId)
  }

  return added
}
