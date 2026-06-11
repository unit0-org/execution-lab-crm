import { color } from '../tokens/color'

export const rowStyle = (column) => ({
  display: 'flex',
  flexDirection: column ? 'column' : 'row',
  flexWrap: 'wrap',
  gap: column ? '8px' : '10px 20px'
})

export const itemStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px'
}

export const checkStyle = { color: color.warmth.cool, fontSize: '11px' }
