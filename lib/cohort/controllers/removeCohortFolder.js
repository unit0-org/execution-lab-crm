import { CohortFolder } from '../models'

// Delete a folder and (by cascade) its resources.
export function removeCohortFolder(id) {
  return CohortFolder.destroy({ where: { id } }).then(() => ({ ok: true }))
}
