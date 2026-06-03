// Classify a meeting attachment for display.
export function attachmentKind(attachment) {
  const mime = attachment.mime_type || ''
  const title = (attachment.title || '').toLowerCase()

  if (mime.startsWith('video')) return 'recording'

  if (title.includes('transcript')) return 'transcript'

  return 'notes'
}
