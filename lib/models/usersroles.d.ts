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
            beforeResolver: any;
        };
    };
};
export default _default;
