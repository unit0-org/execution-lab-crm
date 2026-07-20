import { stackStyle } from './Stack.styles'

/** Vertical flex stack (`xs`/`sm`/`md`/`lg`); `hoverBg` tints on hover. */
export function Stack({ gap = 'md', id, hoverHost, hoverBg, children }) {
  const host = hoverHost || undefined
  const bg = hoverBg || undefined

  return (
    <div
      id={id}
      data-hover-host={host}
      data-hover-bg={bg}
      style={stackStyle(gap)}
    >
      {children}
    </div>
  )
}
