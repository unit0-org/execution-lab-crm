'use client'

import { useState } from 'react'
import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { EarlyBirdInputs } from './EarlyBirdInputs'
import { hasEarlyBird } from './hasEarlyBird'

// Optional early-bird pricing: ticking the box reveals its price ID and
// deadline. Unticked, neither field submits, so both stay null.
export function CohortEarlyBird({ values }) {
  const [enabled, setEnabled] = useState(hasEarlyBird(values))
  const toggle = (event) => setEnabled(event.target.checked)

  return (
    <>
      <Inline gap="sm">
        <Checkbox label="Early bird pricing" checked={enabled}
          onChange={toggle} />
        <Text>Early bird pricing</Text>
      </Inline>
      <EarlyBirdInputs enabled={enabled} values={values} />
    </>
  )
}
