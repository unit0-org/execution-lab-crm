// The quick-add actions offered on a contact, in menu order. Each opens
// the matching composer from the contact activity hook.
export function contactAddItems(act) {
  return [
    { label: 'Note', open: act.note.show },
    { label: 'Fact', open: act.fact.show },
    { label: 'Relationship', open: act.rel.show },
    { label: 'Task', open: act.task.show },
    { label: 'File', open: act.file.show }
  ]
}
