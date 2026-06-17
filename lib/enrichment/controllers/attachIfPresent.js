import { attachTranscriptTx } from './attachTranscriptTx'

// Attach the transcript when the payload includes one with a drive file id;
// otherwise report not attached. Returns { attached, alreadyPresent }.
export function attachIfPresent(meetingId, transcript, t) {
  if (!transcript || !transcript.driveFileId) {
    return { attached: false, alreadyPresent: false }
  }

  return attachTranscriptTx(meetingId, transcript, t)
}
