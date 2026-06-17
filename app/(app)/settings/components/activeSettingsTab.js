// The active settings tab: the requested one when it's visible to the
// caller, otherwise the first visible tab (so a hidden tab can't be
// forced open via the ?tab query param).
export function activeSettingsTab(requested, tabs) {
  const visible = tabs.some((tab) => tab.value === requested)

  return visible ? requested : tabs[0].value
}
