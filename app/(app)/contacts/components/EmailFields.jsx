'use client'

import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { Stack } from '@/ui/layout/Stack'
import { useEmailList } from '../hooks/useEmailList'

export function EmailFields() {
  const { emails, add, change } = useEmailList()

  return (
    <Stack gap="sm">
      {emails.map((email, i) => (
        <TextField key={i} label="Email" name="email" type="email"
          value={email} onChange={(e) => change(i, e.target.value)} />
      ))}
      <Button type="button" onClick={add}>+ Add email</Button>
    </Stack>
  )
}
