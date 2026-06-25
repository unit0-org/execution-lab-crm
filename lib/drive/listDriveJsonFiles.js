import { fetchDriveJsonPage } from './fetchDriveJsonPage'

// Every JSON file (id + name) in a Drive folder, following pagination.
export async function listDriveJsonFiles(folderId, token) {
  const files = []
  let pageToken = ''

  do {
    const page = await fetchDriveJsonPage(folderId, token, pageToken)

    files.push(...page.files)
    pageToken = page.nextPageToken
  } while (pageToken)

  return files
}
