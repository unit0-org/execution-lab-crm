// Accept a Google Drive folder URL or a bare folder id and return just the
// id. Folder URLs look like .../folders/<id>?usp=... — take the segment
// after /folders/, dropping any query or fragment. A bare id passes through
// (trimmed). The Drive API needs the id; a pasted URL otherwise 404s.
export function parseDriveFolderId(value) {
  if (!value) return value

  const match = value.match(/\/folders\/([^/?#]+)/)

  return match ? match[1] : value.trim()
}
