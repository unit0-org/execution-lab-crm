'use client'

export function useLineItemRow(index, onUpdate, onRemove) {
  const set = (key) => (e) =>
    onUpdate(index, { [key]: e.target.value })
  const remove = () => onRemove(index)

  return { set, remove }
}
