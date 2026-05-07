'use client'

import { useState } from 'react'
import { Heading } from '@/ui/Heading'
import { Form } from '@/ui/Form'
import { Button } from '@/ui/Button'
import { Inline } from '@/ui/Inline'
import { useReviewSubmit } from '../hooks/useReviewSubmit'
import { Step2Fields } from './Step2Fields'

export function Step2Review({ draft, onCancel, onSaved }) {
  const [contactId, setContactId] = useState('')
  const [type, setType] = useState(draft?.type || 'note')
  const [notes, setNotes] = useState(draft?.notes || '')
  const onSubmit = useReviewSubmit({ contactId, type, notes, onSaved })

  return (
    <Form action={onSubmit}>
      <Heading gutter="md">Review draft</Heading>
      <Step2Fields contactId={contactId} setContactId={setContactId} type={type} setType={setType} notes={notes} setNotes={setNotes} />
      <Inline gap="md" justify="flex-end">
        <Button onClick={onCancel}>Back</Button>
        <Button type="submit" tone="primary">Save</Button>
      </Inline>
    </Form>
  )
}
