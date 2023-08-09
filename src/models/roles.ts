import { checkPermissions } from "../hooks/permissions.js"

export default {
  name: 'roles',
  connector: 'mainDatabase',
  visible: true,
  relations: [
    {
      type: 'm:n',
      relationalEntity: 'usersroles',
      foreignKey: 'roleId',
      remoteEntity: 'users',
      remoteForeignKey: 'userId',
    },
  ],
  properties: [
    {
      name: 'id',
      type: 'number',
      isPk: true
    },
    {
      name: 'name',
      type: 'string',
    },
  ],
  hooks: {
    all: {
      beforeResolver: checkPermissions
    }
  }
}