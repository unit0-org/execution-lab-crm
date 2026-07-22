// A fresh bill-to client of the given kind (a person or a company).
export function emptyClient(kind = 'contact') {
  return {
    kind,
    contactId: null,
    companyId: null,
    name: '',
    email: '',
    address: ''
  }
}
