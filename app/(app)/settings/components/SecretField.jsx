'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { GrowRow } from '@/ui/layout/GrowRow'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { useFormAction } from '../hooks/useFormAction'
import { setSecretAction } from '../actions/setSecret'

export function SecretField({ kind, label, configured, onSaved }) {
  const { action } = useFormAction(setSecretAction, onSaved)
  const state = configured ? '✓ set' : 'not set'

  return (
    <Form action={action}>
      <input type="hidden" name="kind" value={kind} />
      <GrowRow>
        <TextField label={`${label} (${state})`} name="value"
          type="password" placeholder="Paste to set or replace" />
        <IconButton type="submit" tone="primary" label="Save">
          <Icon name="check" size={16} />
        </IconButton>
      </GrowRow>
    </Form>
  )
}
