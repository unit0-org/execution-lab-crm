const API = 'https://www.googleapis.com/drive/v3/files'

// Move a file between folders by swapping its parent. Needs write access to
// the file and both folders (share them with the service account).
export async function moveDriveFile(fileId, fromFolder, toFolder, token) {
  const params = new URLSearchParams({ addParents: toFolder,
    removeParents: fromFolder, supportsAllDrives: 'true', fields: 'id' })
  const res = await fetch(`${API}/${fileId}?${params}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json' },
    body: '{}'
  })

  if (res.ok) return res.json()

  const data = await res.json().catch(() => ({}))

  throw new Error(data.error?.message || 'drive move failed')
}
