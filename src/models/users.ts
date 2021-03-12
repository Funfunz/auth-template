import { hook_addAndUpdateUser, hook_queryUser } from "@root/hooks/user"

export interface IUser {
  id: number
  name: string
  username: string
  password: string
}

export default {
  name: 'users',
  connector: 'mainDatabase',
  visible: true,
  relations: [
    {
      type: 'm:n',
      relationalEntity: 'usersroles',
      foreignKey: 'userId',
      remoteEntity: 'roles',
      remoteForeignKey: 'roleId',
    },
    {
      type: '1:n',
      foreignKey: 'userId',
      remoteEntity: 'products',
    }
  ],
  properties: [
    {
      name: 'id',
      type: 'number',
      isPk: true,
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'password',
      type: 'string',
      backoffice: {
        editField: {
          type: 'password'
        }
      }
    },
  ],
  hooks: {
    query: {
      afterQueryResult: hook_queryUser,
    },
    update: {
      beforeResolver: hook_addAndUpdateUser,
    },
    add: {
      beforeResolver: hook_addAndUpdateUser,
    }
  },
  layout: {
    label: 'Users',
  }
}