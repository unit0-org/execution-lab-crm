import { bulkAttachLabel } from '@/lib/labels/bulkAttach'

export const runBulkApplyLabel = (supabase, formData) =>
  bulkAttachLabel(supabase, {
    contactIds: formData.getAll('contact_id'),
    tagId:      formData.get('label_id'),
  })
