import { space } from '@/ui/tokens/space'

// A square-ish body: the name sits at the top, the meta footer is pushed
// to the bottom, and a min-height keeps a sparse card from collapsing.
export const bodyStyle = {
  display: 'flex', flexDirection: 'column',
  gap: space[3], minHeight: '116px', height: '100%'
}

export const footerStyle = {
  marginTop: 'auto', display: 'flex', alignItems: 'center',
  justifyContent: 'space-between', gap: space[2]
}
