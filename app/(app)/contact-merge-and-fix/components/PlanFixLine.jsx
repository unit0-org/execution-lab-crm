import { Text } from '@/ui/atoms/Text'

export function PlanFixLine({ fix }) {
  return <Text size="sm">Tidy “{fix.current}” → “{fix.proposed}”</Text>
}
