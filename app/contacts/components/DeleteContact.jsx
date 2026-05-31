'use client'

import { Form } from '@/ui/molecules/Form'
import { Button } from '@/ui/atoms/Button'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { useConfirm } from '../hooks/useConfirm'
import { deleteContactAction } from '../actions'

export function DeleteContact({ contactId }) {
  const { confirming, ask, cancel } = useConfirm()
  if (!confirming) {
    return <Button tone="danger" onClick={ask}>Delete</Button>
  }

  return (
    <Form action={deleteContactAction}>
      <input type="hidden" name="id" value={contactId} />
      <Inline gap="sm">
        <Text size="sm">Delete this contact?</Text>
        <SubmitButton tone="danger" size="sm">Confirm</SubmitButton>
        <Button type="button" size="sm" onClick={cancel}>Cancel</Button>
      </Inline>
    </Form>
  )
}
