import { IHookProps } from '@funfunz/core/lib/index.js'
import type { IUser } from '../models/users.js'
import logger from "../setup/logger.js"
import sha512 from "../utils/sha512.js"

const log = logger('hooks/user')

export function hook_addAndUpdateUser(options: IHookProps<unknown, unknown>) {
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

export function hook_queryUser(options: IHookProps<unknown, unknown>) {
  if (options.schemaOptions.isLocal) {
    // ignore if current execution is from local schema
    return options
  }
  options.results = Array.isArray(options.results)
    ? options.results.map(normalizeUser)
    : normalizeUser(options.results as IUser)
  return options
}