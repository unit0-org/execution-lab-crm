// Mark the offer as edited now — called when its inputs change.
export function touch() {
  return this.update({ updated_at: new Date() })
}
