import { Stack } from '@/ui/layout/Stack'
import { SectionLabel } from '@/ui/molecules/SectionLabel'
import { FieldArea } from '@/ui/molecules/FieldArea'
import { RadioCards } from '@/ui/molecules/RadioCards'
import { STAGE_OPTIONS } from './registerOptions'

const BUSINESS = 'In 2–3 sentences, what’s your business (or what you '
  + 'want to build), and who’s it for?'
const STAGE = 'Where are you right now?'
const OBSTACLE = 'What’s your single biggest obstacle right now?'

// Business context: what they do, their stage, their biggest obstacle.
export function BusinessSection() {
  return (
    <Stack gap="md">
      <SectionLabel n="02">Your business</SectionLabel>
      <FieldArea label={BUSINESS} name="business" required rows={3}
        placeholder="What you sell, who it’s for, why it’s worth it." />
      <RadioCards label={STAGE} name="stage" options={STAGE_OPTIONS} required />
      <FieldArea label={OBSTACLE} name="obstacle" required rows={2}
        placeholder="The one thing most in your way." />
    </Stack>
  )
}
