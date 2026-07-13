// Fill LinkedIn only when none is on file — never clobber an existing one.
export function fillLinkedinIfEmpty(id, linkedin) {
  return this.update(
    { linkedin_url: linkedin },
    { where: { id, linkedin_url: null } }
  )
}
