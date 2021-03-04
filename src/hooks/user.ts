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

export function hook_queryUser(options: IHookProps<null, unknown>) {
  /*if (options.superUser) {
    return options
  }*/
  options.results = (options.results as IUser[]).map((item) => {
    return {
      ...item,
      password: undefined,
    }
  })
  return options
}