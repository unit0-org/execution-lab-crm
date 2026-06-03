// Map a calendar event's attachments (notes, transcripts, recordings).
export function toAttachments(event) {
  return (event.attachments || [])
    .filter((a) => a.fileUrl)
    .map((a) => ({
      title: a.title || null,
      url: a.fileUrl,
      mime_type: a.mimeType || null
    }))
}
