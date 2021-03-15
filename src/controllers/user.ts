import { IUser } from '@root/models/users'
import { funfunz } from '@root/index'
import { Funfunz } from '@funfunz/core'
import logger from '@root/setup/logger'

const log = logger('controllers/user')

export async function updateById(id: string | number, data: Partial<IUser>) {
  const graphqlData = Object.keys(data).map((key) => {
    return `${key}: "${(data as any)[key]}"`
  }).join(',')
  await Funfunz.executeGraphQL(funfunz.schemaManager.getSchemas().local, `mutation {
    updateUsers(filter: { id: { _eq: ${id} }}, data: {${graphqlData}})
  }`)
}

export async function getByEmail(email: string) {
  log(`getByEmail: ${email}`)
  const result = await Funfunz.executeGraphQL(funfunz.schemaManager.getSchemas().local, `{
    users(filter: { email: { _eq: "${email}" }}) {
      id
      name
      email
      password
    }
  }`)
  if (result.errors) {
    throw result.errors
  }
  if (result.data && result.data.users && result.data.users.length === 1) {
    console.log('result', result.data.users)
    return result.data.users[0]
  }
}

export async function getById(id: string | number) {
  log(`getById: ${id}`)
  const result = await Funfunz.executeGraphQL(funfunz.schemaManager.getSchemas().local, `{
    users(filter: { id: { _eq: ${id} }}) {
      id
      name
      email
      password
    }
  }`)
  if (result.errors) {
    throw result.errors
  }
  if (result.data && result.data.users && result.data.users.length === 1) {
    return result.data.users[0]
  }
}


export async function createUser(user: IUser) {
  const result = await Funfunz.executeGraphQL(funfunz.schemaManager.getSchemas().local, `mutation {
    addUsers({
      id: ${user.id},
      name: ${user.name},
      email: ${user.email},
    }) {
      id,
      name,
      email,
    }
  }`)
  if (result.errors) {
    throw result.errors
  }
  if (result.data && result.data.addUsers && result.data.addUsers.length === 1) {
    return result.data.addUsers[0]
  }
}
