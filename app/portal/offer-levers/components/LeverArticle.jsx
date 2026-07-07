import { Stack } from '@/ui/layout/Stack'
import { LeverHeading } from './LeverHeading'
import { Paragraphs } from './Paragraphs'
import { LeverValues } from './LeverValues'
import { LeverNotes } from './LeverNotes'
import { WhyItMatters } from './WhyItMatters'

// One full lever: heading, intro prose, its values, synthesis notes, and
// the closing "why it matters".
export function LeverArticle({ lever, num }) {
  return (
    <Stack gap="md">
      <LeverHeading num={num} name={lever.name} question={lever.question}
        control={lever.control} />
      <Paragraphs items={lever.intro} />
      <LeverValues values={lever.values} />
      <LeverNotes notes={lever.notes} />
      <WhyItMatters paras={lever.whyItMatters} />
    </Stack>
  )
}
