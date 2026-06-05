import { tabsStyle } from './Tabs.styles'
import { FilterChip } from './FilterChip'
import { buildTabs } from './buildTabs'

// A row of tab links; the active tab is highlighted. URL-driven so it
// is deep-linkable and survives refreshes.
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
