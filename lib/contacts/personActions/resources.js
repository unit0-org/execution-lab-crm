import { revalidatePath } from 'next/cache'
import { insertResource, deleteResource } from '@/lib/resources/mutations'

const path = (id) => `/contacts/${id}`

export async function runAddResource(supabase, fd) {
  const id = fd.get('contact_id')
  await insertResource(supabase, {
    contactId: id,
    url: fd.get('url'),
    label: fd.get('label'),
    note: fd.get('note'),
  })
  revalidatePath(path(id))
}

export async function runRemoveResource(supabase, fd) {
  await deleteResource(supabase, fd.get('resource_id'))
  revalidatePath(path(fd.get('contact_id')))
}
