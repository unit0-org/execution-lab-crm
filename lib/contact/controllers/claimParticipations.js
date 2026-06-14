// Point every surviving participation at the winning contact.
export async function claimParticipations(kept, winnerId, t) {
  for (const row of kept.values()) {
    if (row.contact_id === winnerId) continue

    await row.update({ contact_id: winnerId }, { transaction: t })
  }
}
