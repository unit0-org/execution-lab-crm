import { serviceClient } from '@/lib/supabase/serviceClient'
import { CONTACT_FILE_BUCKET } from './contactFileBucket'

// The service-role client scoped to the contact-file bucket. Feature code
// never touches it — go through lib/storage.
export function contactFileStore() {
  return serviceClient().storage.from(CONTACT_FILE_BUCKET)
}
