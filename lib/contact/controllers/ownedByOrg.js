// True when a child row (id) exists in the given model.
export async function ownedByOrg(model, id) {
  const row = await model.findOne({
    where: { id }
  })

  return Boolean(row)
}
