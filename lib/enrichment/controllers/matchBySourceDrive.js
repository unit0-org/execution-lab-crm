import { Meeting } from '@/lib/meeting/models'

// The meeting already stamped with this Drive file id, or null.
export function matchBySourceDrive(sourceDriveId, t) {
  if (!sourceDriveId) return null

  return Meeting.findOne({
    where: { source_drive_id: sourceDriveId }, transaction: t
  })
}
