import { NavList } from '@/ui/NavList'
import { NavItem } from '@/ui/NavItem'

const ITEMS = [
  { href: '/',              label: 'Today' },
  { href: '/follow-ups',    label: 'Follow-ups' },
  { href: '/contacts',      label: 'All people' },
  { href: '/labels',        label: 'Labels' },
]

export function Nav() {
  return (
    <NavList>
      {ITEMS.map((i) => <NavItem key={i.href} href={i.href}>{i.label}</NavItem>)}
    </NavList>
  )
}
