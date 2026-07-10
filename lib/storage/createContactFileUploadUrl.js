import { contactFileStore } from './storageClient'

// A short-lived signed URL the browser PUTs the file bytes to, for a new
// object key. Returns { signedUrl, token, path } or throws on failure.
export async function createContactFileUploadUrl(key) {
  const { data, error } = await contactFileStore()
    .createSignedUploadUrl(key)

  if (error) throw error

  return data
}
