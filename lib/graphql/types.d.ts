import { IUser } from '../models/users.js';
import { Request } from 'express';
export interface IRequest extends Request {
    logout: () => void;
    user: IUser;
}
export interface IContext {
    req: IRequest;
    res: Response;
}
