// One <option> in the AddLabel dropdown.
export function AddLabelOption({ label }) {
  return <option value={label.id}>{label.name}</option>
}
