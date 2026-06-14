import { endRowStyle } from '@/ui/layout/EndRow.styles'

// Reuse the design-system end-aligned row and add only the icon-button
// height reservation, so a row's action cell keeps the same height
// whether or not it holds a menu — rows stay aligned.
export const actionSlotStyle = { ...endRowStyle, minHeight: '32px' }
