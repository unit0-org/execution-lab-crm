import { CommandPalette } from './CommandPalette'
import { NewMeetingModal } from '../meetings/components/NewMeetingModal'

// The two dialogs the command bar can open: the search palette and the
// "log interaction" (new meeting) modal.
export function CommandOverlays({ bar }) {
  return (
    <>
      <CommandPalette open={bar.palette.open} onClose={bar.palette.hide}
        people={bar.people} onPick={bar.goToPerson}
        onAdd={bar.goToAddPerson} />
      <NewMeetingModal open={bar.log.open} onClose={bar.log.hide}
        onCreated={bar.onLogged} />
    </>
  )
}
