import { Button } from '@/ui/atoms/Button'

export function MergeButton({ show, onMerge }) {
  if (!show) return null

  return <Button size="sm" onClick={onMerge}>Merge</Button>
}
