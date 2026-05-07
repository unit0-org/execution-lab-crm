import { attachContactType, detachContactType } from '@/lib/contact_types/mutations'

const args = (formData) => ({
  contactId: formData.get('contact_id'),
  typeId: formData.get('type_id'),
})

export const runApplyType  = (supabase, fd) => attachContactType(supabase, args(fd))
export const runRemoveType = (supabase, fd) => detachContactType(supabase, args(fd))
