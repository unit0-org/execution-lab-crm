import { driveAccessToken } from '@/lib/drive/driveAccessToken'
import { applyMeetingEnrichmentBatch } from '@/lib/enrichment/controllers'
import { loadDriveMeetingFiles } from './loadDriveMeetingFiles'
import { moveImportedFiles } from './moveImportedFiles'
import { importFolders, DRIVE_SCOPE } from './importConfig'

// Cron job: import every meeting JSON in the source folder in ONE
// transaction, then move those files to the done folder. Idempotent — the
// enrichment dedups on sourceDriveId, so a re-run after a partial move is
// safe. Returns a count for the cron run log.
export async function importDriveMeetings() {
  const creds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  const { source, done } = importFolders()
  const token = await driveAccessToken(creds, DRIVE_SCOPE)
  const files = await loadDriveMeetingFiles(source, token)

  if (!files.length) return { imported: 0 }

  await applyMeetingEnrichmentBatch(files)
  await moveImportedFiles(files, source, done, token)

  return { imported: files.length }
}
