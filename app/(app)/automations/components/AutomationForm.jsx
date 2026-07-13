'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { FieldError } from '@/ui/atoms/FieldError'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { createAutomationAction } from '../actions/createAutomation'
import { useAutomationForm } from '../hooks/useAutomationForm'
import { TriggerFields } from './TriggerFields'
import { ActionFields } from './ActionFields'

export function AutomationForm({ templates, categories, onCreated }) {
  const form = useAutomationForm()
  const { action, error } = useFormAction(createAutomationAction, onCreated)

  return (
    <Form action={action}>
      <Stack gap="sm">
        <TriggerFields form={form} categories={categories} />
        <ActionFields form={form} templates={templates} />
        <SubmitButton tone="primary">Create</SubmitButton>
        <FieldError message={error} />
      </Stack>
    </Form>
  )
}
