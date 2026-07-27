import { NavFlyout } from './NavFlyout'

const ITEMS = [
  { href: '/contacts', label: 'Contacts', icon: 'users' },
  { href: '/companies', label: 'Companies', icon: 'building' },
  { href: '/meetings', label: 'Meetings', icon: 'video' },
  { href: '/merge', label: 'Merge & Fix', icon: 'merge', badge: 12 }
]

// The flyout only exists in the collapsed rail, so the story rebuilds one —
// `data-sidebar` and all, since the rail's rules are scoped to it.
const inRail = (Story) => (
  <div className="sidebar-collapsed">
    <div data-sidebar style={{ padding: '1rem 1.5rem 1rem 1rem' }}>
      <Story />
    </div>
  </div>
)

const meta = {
  title: 'Organisms/NavFlyout',
  component: NavFlyout,
  decorators: [inRail],
  args: { label: 'CRM', icon: 'users', items: ITEMS, currentPath: '/contacts' }
}

export default meta

export const Default = {}
