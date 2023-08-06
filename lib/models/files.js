import { model } from '@funfunz/azure-blob-storage-connector';
const filesModel = model({
    name: 'files',
    visible: true,
    connector: 'azureBlobStorage'
});
filesModel.properties.find(p => p.name === 'content').backoffice = {
    visible: {
        entityPage: false
    }
};
export default filesModel;
