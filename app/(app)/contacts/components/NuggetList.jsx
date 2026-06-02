import { CardGrid } from '@/ui/layout/CardGrid'
import { AnswerNugget } from './AnswerNugget'

export function NuggetList({ nuggets }) {
  return (
    <CardGrid>
      {nuggets.map((nugget) => (
        <AnswerNugget key={nugget.id} nugget={nugget} />
      ))}
    </CardGrid>
  )
}
