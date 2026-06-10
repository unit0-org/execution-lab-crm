import { Registration } from '@/lib/registration/models'

// One registration as a plain object, or null when not found.
export function getRegistration(id) {
  return Registration.findOne({ where: { id } })
    .then((row) => (row ? row.toJSON() : null))
}
