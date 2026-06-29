'use client'

import { Stack } from '@/ui/layout/Stack'
import { useOfferLevers } from '../hooks/useOfferLevers'
import { OfferLeversHeader } from './OfferLeversHeader'
import { OfferContextSection } from './OfferContextSection'
import { LeversSection } from './LeversSection'
import { CopyPromptBar } from './CopyPromptBar'

export function OfferLeversView() {
  const { values, setField, setLever, copyPrompt } = useOfferLevers()

  return (
    <Stack gap="lg">
      <OfferLeversHeader />
      <OfferContextSection values={values} onField={setField} />
      <LeversSection values={values} onField={setLever} />
      <CopyPromptBar onCopy={copyPrompt} />
    </Stack>
  )
}
