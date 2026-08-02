import { OwnEvent } from '../models'

// Delete many events at once — the events table's bulk delete. Each one
// takes its participants, their answers and its questions with it, the
// same cascade a single delete relies on.
export async function bulkDeleteEvents(ids) {
  await OwnEvent.destroy({ where: { id: ids } })

  return { ok: true }
}
