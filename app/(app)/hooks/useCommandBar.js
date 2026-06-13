'use client'

import { useRouter } from 'next/navigation'
import { useToggle } from '@/ui/molecules/useToggle'
import { showToast } from '@/ui/molecules/toastBus'
import { usePeople } from './usePeople'
import { useCommandKey } from './useCommandKey'

// Wires the command bar: the search palette, the "log interaction" modal,
// the Ctrl/Cmd+K shortcut, and navigation to people.
export function useCommandBar() {
  const router = useRouter()
  const palette = useToggle()
  const log = useToggle()
  const people = usePeople()
  useCommandKey(palette.show)

  const goToPerson = (id) => { palette.hide(); router.push(`/contacts/${id}`) }
  const goToAddPerson = () => { palette.hide(); router.push('/contacts/new') }
  const onLogged = () => { log.hide(); showToast('Interaction logged') }

  return { palette, log, people, goToPerson, goToAddPerson, onLogged }
}
