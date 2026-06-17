// The settings tabs, in display order. The first is the default.
export const SETTINGS_TABS = [
  { value: 'members', label: 'Members' },
  { value: 'google', label: 'Google Contacts' },
  { value: 'conflicts', label: 'Sync conflicts' },
  { value: 'emails', label: 'Email templates' },
  { value: 'company', label: 'Company info' },
  { value: 'invoicing', label: 'Invoicing' },
  { value: 'appearance', label: 'Appearance' }
]

const ADMIN_ONLY = new Set(['members'])

// Tabs a role may see. Member management (the Members tab) is admin-only.
export function visibleSettingsTabs(role) {
  if (role === 'admin') return SETTINGS_TABS

  return SETTINGS_TABS.filter((tab) => !ADMIN_ONLY.has(tab.value))
}
