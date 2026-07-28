import { PlanLine } from './PlanLine'

export function PlanFixLine({ fix, done }) {
  return (
    <PlanLine done={done}>
      Tidy “{fix.current}” → “{fix.proposed}”
    </PlanLine>
  )
}
