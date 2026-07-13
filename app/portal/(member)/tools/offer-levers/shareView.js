import { toShareOptions } from './toShareOptions'

const pickedPeople = (people, ids) => ids
  .map((id) => people.find((person) => person.contactId === id))
  .filter(Boolean)

// The share dialog's view model: who the picker can still offer, who is
// staged to be added, and who the offer is already shared with.
export function shareView(people, picks, submit) {
  return {
    query: picks.query,
    onType: picks.setQuery,
    onPick: picks.pick,
    onUnpick: picks.unpick,
    options: toShareOptions(people, picks.ids),
    picked: pickedPeople(people, picks.ids),
    shared: people.filter((person) => person.shared),
    sharing: submit.sharing,
    onShare: submit.share,
    onUnshare: submit.unshare
  }
}
