const toEntries = (fields) => Object.entries(fields || {})

export function HiddenFields({ fields }) {
  return toEntries(fields).map(([name, value]) => (
    <input key={name} type="hidden" name={name} value={value} />
  ))
}
