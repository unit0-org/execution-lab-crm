import { driveAccessToken } from './driveAccessToken'
import { driveMultipart } from './driveMultipart'

const UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files'
  + '?uploadType=multipart&fields=id,webViewLink&supportsAllDrives=true'

// Upload a PDF buffer into a Drive folder; returns its id and link.
export async function uploadToDrive(folderId, name, pdf, creds) {
  const token = await driveAccessToken(creds)
  const { body, boundary } = driveMultipart(name, folderId, pdf)
  const res = await fetch(UPLOAD, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `multipart/related; boundary=${boundary}`
    },
    body
  })
  const data = await res.json()

  if (!res.ok) throw new Error(data.error?.message || 'drive upload failed')

  return { fileId: data.id, url: data.webViewLink }
}
