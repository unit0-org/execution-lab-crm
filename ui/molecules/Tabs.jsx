import { tabsStyle } from './Tabs.styles'
import { FilterChip } from './FilterChip'
import { buildTabs } from './buildTabs'

/**
 * URL-driven tab navigation; the active tab is highlighted, so tabs are
 * deep-linkable and survive a refresh.
 */
export function Tabs({ tabs, active, basePath, param }) {
  const items = buildTabs(tabs, basePath, param, active)

  return (
    <div style={tabsStyle}>
      {items.map((tab) => (
        <FilterChip key={tab.key} href={tab.href} label={tab.label}
          active={tab.active} />
      ))}
    </div>
  )
}
