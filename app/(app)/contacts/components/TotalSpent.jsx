import { Insight } from '@/ui/molecules/Insight'

export function TotalSpent({ spend }) {
  if (!spend) return null

  return <Insight label="Total spent" value={spend} />
}
