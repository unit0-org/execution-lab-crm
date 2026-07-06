// Contact-scoped helpers for OfferGeneratorInput, kept out of the model
// file (short-model rule). Every op filters by contact_id, so a member can
// never read or write another contact's rows.
const where = (contactId, extra) => ({ contact_id: contactId, ...extra })

export function addStatics(model) {
  model.forContact = function (contactId) {
    return this.findAll({ where: where(contactId), order: [['created_at']] })
  }

  model.setSingle = async function (contactId, type, value) {
    await this.destroy({ where: where(contactId, { input_type: type }) })

    if (!value.trim()) return

    await this.create(where(contactId, { input_type: type, value }))
  }

  model.addRow = function (contactId, type) {
    return this.create(where(contactId, { input_type: type, value: '' }))
  }

  model.edit = function (contactId, id, value) {
    return this.update({ value }, { where: where(contactId, { id }) })
  }

  model.remove = function (contactId, id) {
    return this.destroy({ where: where(contactId, { id }) })
  }
}
