// Where the panel sits against its trigger, in viewport coordinates (it is
// `position: fixed`).

const gap = 4
const margin = 8

// A fixed element's containing block excludes the scrollbar, so the viewport
// is `clientWidth`/`clientHeight` — `window.innerWidth`/`innerHeight` include
// it, which slid the panel out of line with its trigger by that much.
const vw = () => document.documentElement.clientWidth
const vh = () => document.documentElement.clientHeight

// Which trigger edge the panel hangs from.
const edge = (align, rect) =>
  (align === 'end' ? { right: vw() - rect.right } : { left: rect.left })

const roomBelow = (rect) => vh() - rect.bottom - gap - margin
const roomAbove = (rect) => rect.top - gap - margin

// Out of the bottom of the trigger, which shows where the menu came from —
// but above it when the menu doesn't fit there and there is more room the
// other way. A dialog's action row sits near the foot of the window, where
// hanging down left the rest of the items off-screen with no way to reach
// them. Either side is capped to the room it has, so a menu longer than the
// window scrolls instead of spilling past the edge.
const hang = (align, rect, height) => ({
  ...(height <= roomBelow(rect) || roomAbove(rect) <= roomBelow(rect)
    ? { top: rect.bottom + gap, maxHeight: roomBelow(rect) }
    : { bottom: vh() - rect.top + gap, maxHeight: roomAbove(rect) }),
  ...edge(align, rect)
})

const placements = {
  bottom: hang,
  // Beside it: the sidebar rail's flyout, which has no room below.
  right: (align, rect) => ({ top: rect.top, left: rect.right + 8 })
}

export const placementStyle = (align, rect, placement, height) =>
  (placements[placement] || placements.bottom)(align, rect, height)
