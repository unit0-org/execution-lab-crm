// Contact-scoped helpers for Offer, kept out of the model file. Every op
// filters by contact_id, so a member can only see or touch their own offers.
const owned = (contactId, extra) => ({ contact_id: contactId, ...extra })

export function addStatics(model) {
  model.forContact = function (contactId) {
    return this.findAll({
      where: owned(contactId), order: [['created_at', 'DESC']]
    })
  }

  model.getOwned = function (contactId, id) {
    return this.findOne({ where: owned(contactId, { id }) })
  }

  model.createFor = function (contactId, name) {
    return this.create(owned(contactId, { name }))
  }

  model.rename = function (contactId, id, name) {
    const values = { name, updated_at: new Date() }

    return this.update(values, { where: owned(contactId, { id }) })
  }

  model.remove = function (contactId, id) {
    return this.destroy({ where: owned(contactId, { id }) })
  }
}
