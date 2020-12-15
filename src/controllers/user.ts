import funfunz from '@root/setup/funfunz'
import logger from '@root/setup/logger'

const log = logger('controllers/user')

export async function getById(id: string | number) {
  log(`getById: ${id}`)
  const result = await funfunz.executeGraphQL(`{
    users(filter: { id: { _eq: ${id} }}) {
      id
      name
      email
    }
  }`)
  if (result.errors) {
    throw result.errors
  }
  if (result.data && result.data.users && result.data.users.length === 1) {
    return result.data.users[0]
  }
}

export async function login(email: string, password: string) {
  const result = await funfunz.executeGraphQL(`{
    users(filter: { 
      _and: [
        { email: { _eq: "${email}" }},
        { password: { _eq: "${password}" }}
      ]
    }) {
      id
      name
      email
    }
  }`)
  if (result.data && result.data.users && result.data.users.length === 1) {
    return result.data.users[0]
  }
}