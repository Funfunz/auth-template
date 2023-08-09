import { IHookProps } from "@funfunz/core/lib/index.js";
import { checkPermissions } from "../hooks/permissions.js";
import { hook_queryUser } from "../hooks/user.js";
export interface IUser {
    id?: number | string;
    name: string;
    email: string;
    password?: string;
}
declare const _default: {
    name: string;
    connector: string;
    visible: boolean;
    relations: ({
        type: string;
        relationalEntity: string;
        foreignKey: string;
        remoteEntity: string;
        remoteForeignKey: string;
    } | {
        type: string;
        foreignKey: string;
        remoteEntity: string;
        relationalEntity?: undefined;
        remoteForeignKey?: undefined;
    })[];
    properties: ({
        name: string;
        type: string;
        isPk: boolean;
        backoffice?: undefined;
    } | {
        name: string;
        type: string;
        isPk?: undefined;
        backoffice?: undefined;
    } | {
        name: string;
        type: string;
        backoffice: {
            editField: {
                type: string;
            };
        };
        isPk?: undefined;
    })[];
    hooks: {
        query: {
            beforeResolver: typeof checkPermissions;
            afterQueryResult: typeof hook_queryUser;
        };
        update: {
            beforeResolver: (args: IHookProps<unknown, unknown>) => IHookProps<unknown, unknown>;
        };
        add: {
            beforeResolver: (args: IHookProps<unknown, unknown>) => IHookProps<unknown, unknown>;
        };
        delete: {
            beforeResolver: typeof checkPermissions;
        };
    };
    backoffice: {
        label: string;
    };
};
export default _default;
