import { FormActions } from '@/ui/molecules/FormActions'

// The composer's action row: submit + cancel, matching the app's dialogs.
export function CommentFormActions({ onCancel }) {
  return <FormActions label="Add comment" onCancel={onCancel} />
}
