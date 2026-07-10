import { contactFileStore } from './storageClient'
import { DOWNLOAD_URL_TTL_SECONDS } from './contactFileBucket'

// Fresh short-lived signed download URLs for many object keys, in one call.
// Returns a Map of key → signedUrl (missing/failed keys are omitted).
export async function createContactFileDownloadUrls(keys) {
  if (!keys.length) return new Map()

  const { data } = await contactFileStore()
    .createSignedUrls(keys, DOWNLOAD_URL_TTL_SECONDS)

  return new Map((data || []).map((row) => [row.path, row.signedUrl]))
}
