// The settings tabs, in display order. The first is the default.
export const SETTINGS_TABS = [
  { value: 'members', label: 'Members' },
  { value: 'integrations', label: 'Integrations' },
  { value: 'google', label: 'Google Contacts' },
  { value: 'conflicts', label: 'Sync conflicts' },
  { value: 'emails', label: 'Email templates' },
  { value: 'company', label: 'Company info' },
  { value: 'invoicing', label: 'Invoicing' }
]

const OWNER_TABS = [{ value: 'invitations', label: 'Invitations' }]

// The tabs visible to a user — owners also see platform invitations.
export function settingsTabsFor(isOwner) {
  return isOwner ? [...SETTINGS_TABS, ...OWNER_TABS] : SETTINGS_TABS
}
