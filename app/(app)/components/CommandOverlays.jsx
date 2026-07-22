import { CommandPalette } from './CommandPalette'
import { LogNoteModal } from './LogNoteModal'

// The two dialogs the command bar can open: the search palette and the
// "log interaction" note modal.
export function CommandOverlays({ bar }) {
  return (
    <>
      <CommandPalette open={bar.palette.open} onClose={bar.palette.hide}
        people={bar.people} onPick={bar.goTo}
        onAdd={bar.goToAddPerson} />
      <LogNoteModal open={bar.log.open} onClose={bar.log.hide}
        onLogged={bar.onLogged} />
    </>
  )
}
