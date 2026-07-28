'use client'

import { Popover } from '../molecules/Popover'
import { useHoverMenu } from '../molecules/useHoverMenu'
import { NavRailButton } from './NavRailButton'
import { NavFlyoutMenu } from './NavFlyoutMenu'
import { navBadgeTotal } from './navBadgeTotal'

/**
 * A category in the collapsed rail: one glyph that opens the category's
 * links in a panel beside it — on **hover**, since a rail of bare glyphs
 * otherwise makes you click to find out what each one holds. Clicking
 * still toggles it, for touch. Hidden while the sidebar is expanded
 * (globals.css owns that). The panel takes the hover props too: it is
 * portaled to `<body>` and sits clear of the glyph, so it has to hold
 * itself open while the pointer crosses to it.
 */
export function NavFlyout({ label, icon, items, currentPath, onNavigate }) {
  const menu = useHoverMenu()

  const leave = () => {
    menu.hide()
    onNavigate?.()
  }

  return (
    <div data-nav-flyout {...menu.hoverProps}>
      <Popover open={menu.open} onClose={menu.hide} placement="right"
        trigger={
          <NavRailButton icon={icon} label={label} onClick={menu.toggle}
            badge={navBadgeTotal(items)} expanded={menu.open}
            active={items.some((item) => item.href === currentPath)} />
        }>
        <NavFlyoutMenu label={label} items={items} currentPath={currentPath}
          onNavigate={leave} hover={menu.hoverProps} />
      </Popover>
    </div>
  )
}
