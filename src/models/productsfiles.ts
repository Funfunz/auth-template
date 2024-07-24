import { checkPermissions } from '../hooks/permissions.js'

export default {
  name: 'productsfiles',
  connector: 'jsonDatabase',
  visible: true,
  properties: [
    {
      name: 'productId',
      type: 'number',
      isPk: true
    },
    {
      name: 'name',
      type: 'string',
      isPk: true
    }
  ],
  relations: [
    {
      type: 'n:1',
      relationalEntity: 'productsfiles',
      foreignKey: 'productId',
      remoteEntity: 'products'
    },
    {
      type: 'n:1',
      relationalEntity: 'productsfiles',
      foreignKey: 'name',
      remoteEntity: 'files'
    }
  ],
  hooks: {
    all: {
      beforeResolver: checkPermissions
    }
  }
}