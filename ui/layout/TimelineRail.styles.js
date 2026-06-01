import { space } from '../tokens/space'
import { color } from '../tokens/color'

export const railStyle = { display: 'flex', flexDirection: 'column' }

export const itemStyle = {
  display: 'flex', gap: space[3], paddingBottom: space[4]
}

export const markerStyle = {
  position: 'relative', flex: 'none', width: '10px',
  display: 'flex', justifyContent: 'center', paddingTop: '7px'
}

export const dotStyle = {
  width: '8px', height: '8px', borderRadius: '999px',
  background: color.accent.solid, zIndex: 1
}

export const lineStyle = {
  position: 'absolute', top: '7px', bottom: '-1rem', left: '50%',
  borderLeft: `2px dotted ${color.border.strong}`
}
