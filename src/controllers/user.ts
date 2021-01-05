import type { IHookProps } from '@funfunz/core'
import type { IUser } from '@root/models/users'
import funfunz from '@root/setup/funfunz'
import logger from '@root/setup/logger'
import sha512 from '@root/utils/sha512'

const log = logger('controllers/user')
log('booting users')
export function hook_addAndUpdateUser(options: IHookProps<null>) {
  console.log('hello')
  if ((options.args.data as any)?.password) {
    (options.args.data as any).password = sha512((options.args.data as any).password)
  }
  return options
}

export function hook_queryUser(options: IHookProps<null>) {
  log('hook_queryUser')
  options.results = (options.results as IUser[]).map((item) => {
    return {
      ...item,
      password: undefined,
    }
  })
  return options
}

export async function updateById(id: string | number, data: Partial<IUser>) {
  const graphqlData = Object.keys(data).map((key) => {
    return `${key}: "${(data as any)[key]}"`
  }).join(',')
  await funfunz.executeGraphQL(`mutation {
    updateUsers(filter: { id: { _eq: ${id} }}, data: {${graphqlData}})
  }`)
}

export async function getByEmail(email: string) {
  log(`getByEmail: ${email}`)
  const result = await funfunz.executeGraphQL(`{
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
    return result.data.users[0]
  }
}

export async function getById(id: string | number) {
  log(`getById: ${id}`)
  const result = await funfunz.executeGraphQL(`{
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
