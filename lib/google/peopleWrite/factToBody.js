// Map an extracted fact (with contactsField + body) to a People API
// patch body + mask. Returns null when no built-in field matches —
// the router falls back to memories in that case.

const MAPPERS = {
  spouseName: (v) => ({ body: { relations: [{ person: v, type: 'spouse' }] }, mask: 'relations' }),
  childName:  (v) => ({ body: { relations: [{ person: v, type: 'child'  }] }, mask: 'relations' }),
  birthday:   (v) => ({ body: { birthdays: [{ text: v }] },                    mask: 'birthdays' }),
  company:    (v) => ({ body: { organizations: [{ name: v }] },                mask: 'organizations' }),
  jobTitle:   (v) => ({ body: { organizations: [{ title: v }] },               mask: 'organizations' }),
  address:    (v) => ({ body: { addresses: [{ formattedValue: v }] },          mask: 'addresses' }),
  phone:      (v) => ({ body: { phoneNumbers: [{ value: v }] },                mask: 'phoneNumbers' }),
}

export const factToPeopleBody = (field, value) => MAPPERS[field]?.(value) || null
