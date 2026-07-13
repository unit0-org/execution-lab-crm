// Link this member row to an auth user and activate it.
export function linkUser(userId) {
  return this.update({ user_id: userId, status: 'active' })
}
