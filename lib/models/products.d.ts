import { checkPermissions } from "../hooks/permissions.js";
declare const _default: {
    name: string;
    connector: string;
    visible: boolean;
    properties: ({
        name: string;
        type: string;
        isPk: boolean;
        backoffice: {
            label: string;
            editField?: undefined;
        };
    } | {
        name: string;
        type: string;
        backoffice: {
            label: string;
            editField?: undefined;
        };
        isPk?: undefined;
    } | {
        name: string;
        type: string;
        backoffice: {
            label: string;
            editField: {
                type: string;
                options: {
                    label: string;
                    value: string;
                }[];
            };
        };
        isPk?: undefined;
    })[];
    backoffice: {
        label: string;
    };
    relations: {
        type: string;
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
