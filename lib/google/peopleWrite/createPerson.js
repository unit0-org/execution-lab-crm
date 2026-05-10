import { peopleRequest } from './api'

const buildBody = ({ name, email, company }) => ({
  names:          name    ? [{ givenName: name }] : undefined,
  emailAddresses: email   ? [{ value: email }]    : undefined,
  organizations:  company ? [{ name: company }]   : undefined,
})

export async function createPerson(accessToken, payload) {
  return peopleRequest(accessToken, 'POST', 'people:createContact', buildBody(payload))
}
