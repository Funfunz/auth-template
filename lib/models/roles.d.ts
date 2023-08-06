declare const _default: {
    name: string;
    connector: string;
    visible: boolean;
    relations: {
        type: string;
        relationalEntity: string;
        foreignKey: string;
        remoteEntity: string;
        remoteForeignKey: string;
    }[];
    properties: ({
        name: string;
        type: string;
        isPk: boolean;
    } | {
        name: string;
        type: string;
        isPk?: undefined;
    })[];
    hooks: {
        all: {
            beforeResolver: any;
        };
    };
};
export default _default;
