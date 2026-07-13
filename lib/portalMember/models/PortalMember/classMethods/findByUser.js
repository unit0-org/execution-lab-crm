// Find the portal member linked to a given auth user id.
export function findByUser(userId) {
  return this.findOne({ where: { user_id: userId } })
}
