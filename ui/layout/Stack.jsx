import { stackStyle } from './Stack.styles'

/** Vertical flex stack (`xs`/`sm`/`md`/`lg`). */
export function Stack({ gap = 'md', id, hoverHost, children }) {
  const host = hoverHost || undefined

  return (
    <div id={id} data-hover-host={host} style={stackStyle(gap)}>
      {children}
    </div>
  )
}
