import { IHookProps } from "@funfunz/core/lib/index.js"
import { Request } from "express"

export function checkPermissions(options: IHookProps<unknown, unknown>) {
  if (options.schemaOptions.isLocal) {
    // ignore authorization check if current execution is from local schema
    return options
  }
  // TODO: authentication
  /*const { req } = options.requestContext as { req: Request } || {}
  if (!req?.user) {
    throw 'Not authorized'
  }*/
  return options
}