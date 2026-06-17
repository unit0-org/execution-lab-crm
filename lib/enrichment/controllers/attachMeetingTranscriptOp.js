import { sequelize } from '@/lib/db/sequelize'
import { attachTranscriptTx } from './attachTranscriptTx'

// Op4 standalone: attach a transcript to a meeting by drive_file_id
// (idempotent). Returns { attached, alreadyPresent }.
export function attachMeetingTranscriptOp(input) {
  return sequelize.transaction((t) =>
    attachTranscriptTx(input.meetingId, input, t))
}
