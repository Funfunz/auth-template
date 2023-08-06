import { IUser } from '@root/models/users';
export declare function updateById(id: string | number, data: Partial<IUser>): Promise<void>;
export declare function getByEmail(email: string): Promise<any>;
export declare function getById(id: string | number): Promise<any>;
export declare function createUser(user: IUser): Promise<any>;
