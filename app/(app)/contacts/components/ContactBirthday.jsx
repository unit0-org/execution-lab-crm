'use client'

import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { BirthdaySummary } from './BirthdaySummary'
import { EditBirthdayModal } from './EditBirthdayModal'
import { useReveal } from '../hooks/useReveal'

export function ContactBirthday({ contactId, day, month, year, onChanged }) {
  const edit = useReveal()

  return (
    <Inline gap="sm">
      <Text size="sm" tone="muted">Birthday</Text>
      <BirthdaySummary day={day} month={month} year={year} />
      <IconButton label="Edit birthday" onClick={edit.show}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <EditBirthdayModal contactId={contactId} day={day} month={month}
        year={year} open={edit.shown} onClose={edit.hide}
        onChanged={onChanged} />
    </Inline>
  )
}
