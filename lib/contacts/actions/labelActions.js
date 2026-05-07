import { attachLabel, detachLabel } from '@/lib/labels/mutations'

const args = (formData) => ({
  contactId: formData.get('contact_id'),
  tagId: formData.get('label_id'),
})

export const runApplyLabel = (supabase, fd) => attachLabel(supabase, args(fd))
export const runRemoveLabel = (supabase, fd) => detachLabel(supabase, args(fd))
