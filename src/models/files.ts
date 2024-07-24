import { model } from '@funfunz/azure-blob-storage-connector/lib/index.js'
import { IEntityInfo, IProperty } from '@funfunz/core/lib/index.js';

const filesModel: IEntityInfo = model({
  name: 'files',
  visible: true,
  connector: 'azureBlobStorage'
}) as IEntityInfo

(filesModel.properties.find(p=>p.name==='content') as IProperty).backoffice = {
  visible: {
    entityPage: false
  }
}

filesModel.relations = [
  {
    type: 'm:n',
    relationalEntity: 'productsfiles',
    foreignKey: 'name',
    remoteEntity: 'products',
    remoteForeignKey: 'productId',
  }
]

filesModel.hooks = {
  all: {
    afterQueryResult: (data) => {
      console.log(data.results)
      return data
    }
  }
}

export default filesModel