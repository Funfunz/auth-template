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
            beforeResolver: any;
            afterQueryResult: any;
        };
        update: {
            beforeResolver: (args: IHookProps<unknown, unknown>) => any;
        };
        add: {
            beforeResolver: (args: IHookProps<unknown, unknown>) => any;
        };
        delete: {
            beforeResolver: any;
        };
    };
    backoffice: {
        label: string;
    };
};
export default _default;
