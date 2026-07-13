'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { FormError } from '@/ui/molecules/FormError'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { CommentFields } from './CommentFields'
import { CommentFormActions } from './CommentFormActions'
import { addOfferCommentAction } from '../actions/addOfferComment'

export function CommentForm({ offerId, audience, onSaved, onCancel }) {
  const { action, error } = useFormAction(addOfferCommentAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="offer_id" value={offerId} />
      <Stack gap="md">
        <CommentFields options={audience} />
        <FormError message={error} />
        <CommentFormActions onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
