import { IUser } from '@root/models/users'
import { Request } from 'express'

export interface IRequest extends Request {
  login: (user: any, cb: Function) => void
  logout: () => void
  user: IUser
}
export interface IContext {
  req: IRequest
  res: Response
}