import { listDriveJsonFiles } from '@/lib/drive/listDriveJsonFiles'
import { downloadDriveFile } from '@/lib/drive/downloadDriveFile'

// List every JSON file in the folder and parse each into an import item
// ({ id, name, payload }) the enrichment batch can apply. A malformed file
// throws here, before any DB write — so a bad file imports nothing.
export async function loadDriveMeetingFiles(folderId, token) {
  const files = await listDriveJsonFiles(folderId, token)

  return Promise.all(files.map((file) => toImportItem(file, token)))
}

async function toImportItem(file, token) {
  const text = await downloadDriveFile(file.id, token)

  return { id: file.id, name: file.name, payload: JSON.parse(text) }
}
