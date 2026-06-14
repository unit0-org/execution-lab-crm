const UNIQUE = 'SequelizeUniqueConstraintError'

export function emailError(e) {
  if (e.name === UNIQUE) return 'That email is already in use.'

  return e.message
}
