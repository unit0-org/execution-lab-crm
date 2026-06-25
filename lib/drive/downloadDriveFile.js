const API = 'https://www.googleapis.com/drive/v3/files'

// A Drive file's raw text content (alt=media), by id.
export async function downloadDriveFile(fileId, token) {
  const url = `${API}/${fileId}?alt=media&supportsAllDrives=true`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  })

  if (res.ok) return res.text()

  const data = await res.json().catch(() => ({}))

  throw new Error(data.error?.message || 'drive download failed')
}
