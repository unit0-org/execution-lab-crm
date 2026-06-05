'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { NuggetHead } from './NuggetHead'
import { NuggetDetails } from './NuggetDetails'
import { useDisclosure } from '../hooks/useDisclosure'

export function AnswerNugget({ nugget, onChanged }) {
  const { open, toggle } = useDisclosure()

  return (
    <Card>
      <Stack gap="xs">
        <NuggetHead nugget={nugget} open={open} onToggle={toggle}
          onChanged={onChanged} />
        <Text gutter="none">{nugget.answer}</Text>
        <NuggetDetails nugget={nugget} open={open} />
      </Stack>
    </Card>
  )
}
