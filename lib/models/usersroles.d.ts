import { checkPermissions } from '../hooks/permissions.js';
declare const _default: {
    name: string;
    connector: string;
    visible: boolean;
    properties: {
        name: string;
        type: string;
        isPk: boolean;
    }[];
    relations: {
        type: string;
        relationalEntity: string;
        foreignKey: string;
        remoteEntity: string;
    }[];
    hooks: {
        all: {
            beforeResolver: typeof checkPermissions;
        };
    };
};
export default _default;
