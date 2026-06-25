import { parseDriveFolderId } from '@/lib/drive/parseDriveFolderId'

// The full-Drive scope (read + move user-owned files) and the two folders
// the meeting import drains from / files into. Env vars override the
// defaults, which are the folders Abel provided.
export const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive'

const SOURCE = '1AtO3fPvNB3O8kU098rbUONO1aaBo2gbI'
const DONE = '1k2XdJMR-6gGo5JpewKb1MxU4Jitnr2UR'

export function importFolders() {
  const source = process.env.MEETING_IMPORT_SOURCE_FOLDER || SOURCE
  const done = process.env.MEETING_IMPORT_DONE_FOLDER || DONE

  return { source: parseDriveFolderId(source),
    done: parseDriveFolderId(done) }
}
