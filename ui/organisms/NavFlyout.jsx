'use client'

import { Popover } from '../molecules/Popover'
import { useToggle } from '../molecules/useToggle'
import { NavRailButton } from './NavRailButton'
import { NavFlyoutMenu } from './NavFlyoutMenu'
import { navBadgeTotal } from './navBadgeTotal'

/**
 * A category in the collapsed rail: one glyph that opens the category's
 * links in a panel beside it, instead of spilling every link into the rail.
 * Hidden while the sidebar is expanded (globals.css owns that).
 */
export function NavFlyout({ label, icon, items, currentPath, onNavigate }) {
  const menu = useToggle()

  const leave = () => {
    menu.hide()
    onNavigate?.()
  }

  return (
    <div data-nav-flyout>
      <Popover open={menu.open} onClose={menu.hide} placement="right"
        trigger={
          <NavRailButton icon={icon} label={label} onClick={menu.toggle}
            badge={navBadgeTotal(items)} expanded={menu.open}
            active={items.some((item) => item.href === currentPath)} />
        }>
        <NavFlyoutMenu label={label} items={items} currentPath={currentPath}
          onNavigate={leave} />
      </Popover>
    </div>
  )
}
