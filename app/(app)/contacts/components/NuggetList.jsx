import { Columns } from '@/ui/layout/Columns'
import { AnswerNugget } from './AnswerNugget'

export function NuggetList({ nuggets }) {
  return (
    <Columns>
      {nuggets.map((nugget) => (
        <AnswerNugget key={nugget.id} nugget={nugget} />
      ))}
    </Columns>
  )
}
