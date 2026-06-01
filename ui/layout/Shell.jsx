import { Hamburger } from './Hamburger'
import { Scrim } from './Scrim'
import { shellStyle, mainStyle, asideStyle } from './Shell.styles'

export function Shell({ sidebar, open, onToggle, onClose, children }) {
  const isOpen = open || undefined

  return (
    <div data-app-shell style={shellStyle}>
      <aside data-sidebar data-open={isOpen} style={asideStyle}>
        {sidebar}
      </aside>
      <Hamburger onClick={onToggle} />
      <main data-app-main style={mainStyle}>{children}</main>
      <Scrim open={open} onClick={onClose} />
    </div>
  )
}
