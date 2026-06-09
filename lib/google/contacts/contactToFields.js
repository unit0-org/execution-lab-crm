const birthdayOf = (c) => {
  if (!c.birth_day || !c.birth_month) return null

  return { day: c.birth_day, month: c.birth_month, year: c.birth_year || null }
}

// Map a loaded CRM contact (+ child rows) to People API create fields.
export function contactToFields(c) {
  return {
    firstName: c.first_name,
    lastName: c.last_name,
    emails: c.contact_email.map((e) => e.email),
    phones: c.contact_phone.map((p) => p.phone),
    birthday: birthdayOf(c)
  }
}
