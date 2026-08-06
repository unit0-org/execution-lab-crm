'use client'

import { Popover } from './Popover'
import { useToggle } from './useToggle'
import { SplitButtonGroup } from './SplitButtonGroup'
import { SplitButtonItems } from './SplitButtonItems'

/**
 * A default action joined to a caret that opens its other ways to run:
 * click the label to do the usual thing, click the caret to pick a variant.
 * `items` are `{ label, hint }` rows with their own `onClick`, `busy` spins
 * the label while it runs, and `tone`/`size` are the `Button`'s. Use it
 * instead of parking a second button beside the primary one.
 */
export function SplitButton(props) {
  const { label, items, tone, size, busy, disabled, onClick } = props
  const menu = useToggle()
  const pick = (item) => { menu.hide(); item.onClick() }
  const trigger = (
    <SplitButtonGroup label={label} tone={tone} size={size} busy={busy}
      disabled={disabled} onRun={onClick} onOpen={menu.toggle} />
  )

  return (
    <Popover open={menu.open} onClose={menu.hide} trigger={trigger}
      align="end">
      <SplitButtonItems items={items} onPick={pick} />
    </Popover>
  )
}
