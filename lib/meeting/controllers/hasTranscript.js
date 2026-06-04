import { attachmentKind } from './attachmentKind'

// True when any of a meeting's attachments is a transcript.
export function hasTranscript(attachments) {
  return (attachments || []).some(
    (a) => attachmentKind(a) === 'transcript'
  )
}
