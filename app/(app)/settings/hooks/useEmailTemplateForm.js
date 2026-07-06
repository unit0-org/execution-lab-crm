'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { updateEmailTemplateAction } from '../actions/updateEmailTemplate'

// Binds the update action to a template key and toasts on save.
export function useEmailTemplateForm(templateKey, onSaved) {
  const bound = (formData) =>
    updateEmailTemplateAction(templateKey, formData)
  const onDone = () => {
    showToast('Template saved')
    onSaved()
  }

  return useFormAction(bound, onDone)
}
