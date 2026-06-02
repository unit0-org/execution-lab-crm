'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { NuggetHead } from './NuggetHead'
import { NuggetDetails } from './NuggetDetails'
import { useDisclosure } from '../hooks/useDisclosure'

export function AnswerNugget({ nugget }) {
  const { open, toggle } = useDisclosure()

  return (
    <Card>
      <Stack gap="xs">
        <NuggetHead question={nugget.question} open={open} onToggle={toggle} />
        <Text gutter="none">{nugget.answer}</Text>
        <NuggetDetails nugget={nugget} open={open} />
      </Stack>
    </Card>
  )
}
