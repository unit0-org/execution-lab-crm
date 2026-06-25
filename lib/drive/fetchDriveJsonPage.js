const API = 'https://www.googleapis.com/drive/v3/files'

// One page of the JSON files in a Drive folder: each file's id and name,
// plus a nextPageToken to continue. Needs the broad `drive` scope token.
export async function fetchDriveJsonPage(folderId, token, pageToken) {
  const q = `'${folderId}' in parents`
    + " and mimeType='application/json' and trashed=false"
  const params = new URLSearchParams({ q,
    fields: 'nextPageToken,files(id,name)', pageSize: '1000',
    supportsAllDrives: 'true', includeItemsFromAllDrives: 'true' })

  if (pageToken) params.set('pageToken', pageToken)

  const res = await fetch(`${API}?${params}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  const data = await res.json()

  if (!res.ok) throw new Error(data.error?.message || 'drive list failed')

  return { files: data.files || [], nextPageToken: data.nextPageToken || '' }
}
