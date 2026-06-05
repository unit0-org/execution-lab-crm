// Build tab links: each carries its href and whether it is active.
export function buildTabs(tabs, basePath, param, active) {
  return tabs.map((tab) => ({
    key: tab.value,
    label: tab.label,
    href: `${basePath}?${param}=${tab.value}`,
    active: tab.value === active
  }))
}
