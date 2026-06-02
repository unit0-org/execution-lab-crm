import { mergeAnswers } from './mergeAnswers'
import { mergedFields } from './mergedParticipantFields'

// Fold a duplicate participation into the survivor: keep the richest
// data, carry over its answers, then remove the duplicate row.
export async function foldParticipant(survivor, dup, t) {
  await mergeAnswers(survivor.id, dup.id, t)
  await survivor.update(mergedFields(survivor, dup), { transaction: t })
  await dup.destroy({ transaction: t })
}
