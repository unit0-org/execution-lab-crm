import { requestContactFileUploadAction }
  from '../actions/requestContactFileUpload'
import { attachContactFileAction } from '../actions/attachContactFile'

function saveMeta(contactId, slot, file) {
  return attachContactFileAction({
    contactId,
    bucketPath: slot.bucketPath,
    fileName: file.name,
    mimeType: file.type,
    sizeBytes: file.size
  })
}

function putBytes(contactId, slot, file) {
  return fetch(slot.signedUrl, { method: 'PUT', body: file })
    .then(() => saveMeta(contactId, slot, file))
}

// Two-step upload: signed URL → PUT bytes to storage → persist metadata.
export function uploadContactFile(contactId, file) {
  return requestContactFileUploadAction(contactId)
    .then((slot) => putBytes(contactId, slot, file))
}
