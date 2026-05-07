'use client'

import { Form } from '@/ui/Form'
import { useLogEntry } from '../hooks/useLogEntry'
import { ContactPicker } from './ContactPicker'
import { EntryTypeField } from './EntryTypeField'
import { OccurredAtField } from './OccurredAtField'
import { TitleField } from './TitleField'
import { BodyField } from './BodyField'
import { SubmitButton } from './SubmitButton'
import { LogStatus } from './LogStatus'

export function LogEntryForm() {
  const { action, state } = useLogEntry()

  return (
    <>
      <LogStatus state={state} />
      <Form action={action}>
        <ContactPicker />
        <EntryTypeField />
        <OccurredAtField />
        <TitleField />
        <BodyField />
        <SubmitButton />
      </Form>
    </>
  )
}
