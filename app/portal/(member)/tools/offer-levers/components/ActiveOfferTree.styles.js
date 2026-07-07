import { space } from '@/ui/tokens/space'
import { color } from '@/ui/tokens/color'

// The active offers, indented off a spine line connecting them to the card.
export const treeStyle = {
  display: 'flex', flexDirection: 'column', gap: space[2],
  marginLeft: space[3], paddingLeft: space[4],
  borderLeft: `2px solid ${color.accent.soft}`
}
