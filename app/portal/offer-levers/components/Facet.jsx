import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Paragraphs } from './Paragraphs'

// One labelled facet of a value (e.g. "What changes" + its prose). Hidden
// when the value doesn't document this facet.
export function Facet({ label, text }) {
  if (!text) return null

  return (
    <Stack gap="xs">
      <MonoLabel tone="accent" caps>{label}</MonoLabel>
      <Paragraphs items={text.split('\n\n')} />
    </Stack>
  )
}
