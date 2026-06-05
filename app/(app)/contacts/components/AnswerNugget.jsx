'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { NuggetHead } from './NuggetHead'
import { NuggetLead } from './NuggetLead'
import { NuggetBody } from './NuggetBody'
import { NuggetDetails } from './NuggetDetails'
import { useDisclosure } from '../hooks/useDisclosure'

export function AnswerNugget({ nugget, onChanged }) {
  const { open, toggle } = useDisclosure()

  return (
    <Card hoverHost>
      <Stack gap="xs">
        <NuggetHead nugget={nugget} open={open} onToggle={toggle}
          onChanged={onChanged}>
          <NuggetLead question={nugget.question} answer={nugget.answer} />
        </NuggetHead>
        <NuggetBody question={nugget.question} answer={nugget.answer} />
        <NuggetDetails nugget={nugget} open={open} />
      </Stack>
    </Card>
  )
}
