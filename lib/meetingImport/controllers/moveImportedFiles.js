import { moveDriveFile } from '@/lib/drive/moveDriveFile'

// Move every imported file out of the source folder into the done folder.
// Runs only after the import transaction commits; a re-run is harmless
// because the enrichment dedups on sourceDriveId.
export function moveImportedFiles(files, fromFolder, toFolder, token) {
  return Promise.all(files.map((file) =>
    moveDriveFile(file.id, fromFolder, toFolder, token)))
}
