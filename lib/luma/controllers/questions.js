import { KNOWN_COLUMNS } from './knownColumns'

// Pull custom registration answers from a Luma row: every column we don't
// map ourselves, paired with its (non-empty) answer.
export function questionsFromRow(row) {
  return Object.entries(row)
    .filter(([key, value]) => !KNOWN_COLUMNS.has(key) && value)
    .map(([question, answer]) => ({ question, answer }))
}
