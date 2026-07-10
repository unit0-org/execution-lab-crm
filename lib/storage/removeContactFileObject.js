import { contactFileStore } from './storageClient'

// Delete an object from the contact-file bucket by its key.
export async function removeContactFileObject(key) {
  const { error } = await contactFileStore().remove([key])

  if (error) throw error
}
