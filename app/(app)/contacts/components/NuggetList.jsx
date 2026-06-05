import { CardGrid } from '@/ui/layout/CardGrid'
import { AnswerNugget } from './AnswerNugget'

export function NuggetList({ nuggets, onChanged }) {
  return (
    <CardGrid>
      {nuggets.map((nugget) => (
        <AnswerNugget key={nugget.id} nugget={nugget} onChanged={onChanged} />
      ))}
    </CardGrid>
  )
}
