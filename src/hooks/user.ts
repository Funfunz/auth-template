import type { IHookProps } from "@funfunz/core"
import type { IUser } from '@root/models/users'
import logger from "@root/setup/logger"
import sha512 from "@root/utils/sha512"

const log = logger('hooks/user')

export function hook_addAndUpdateUser(options: IHookProps<null, unknown>) {
  if ((options.args.data as any)?.password) {
    (options.args.data as any).password = sha512((options.args.data as any).password)
  }
  return options
}

function normalizeUser(user: Partial<IUser> = {}) {
  return {
    ...user,
    password: undefined,
  }
}

export function hook_queryUser(options: IHookProps<null, unknown>) {
  options.results = Array.isArray(options.results)
    ? options.results.map(normalizeUser)
    : normalizeUser(options.results as IUser)
  return options
}