'use client'

import { useRouter } from 'next/navigation'
import { useToggle } from '@/ui/molecules/useToggle'
import { showToast } from '@/ui/molecules/toastBus'
import { usePeople } from './usePeople'
import { useCompanyTargets } from './useCompanyTargets'
import { useCommandKey } from './useCommandKey'

// Wires the command bar: the search palette (people + companies), the "log
// interaction" modal, the Ctrl/Cmd+K shortcut, and navigation by link.
export function useCommandBar() {
  const router = useRouter()
  const palette = useToggle()
  const log = useToggle()
  const targets = [...usePeople(), ...useCompanyTargets()]
  useCommandKey(palette.show)

  const goTo = (href) => { palette.hide(); router.push(href) }
  const goToAddPerson = () => { palette.hide(); router.push('/contacts/new') }
  const onLogged = () => { log.hide(); showToast('Interaction logged') }

  return { palette, log, people: targets, goTo, goToAddPerson, onLogged }
}
