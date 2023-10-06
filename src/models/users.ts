import { IHookProps } from "@funfunz/core/lib/index.js"
import { checkPermissions } from "../hooks/permissions.js"
import { hook_addAndUpdateUser, hook_queryUser } from "../hooks/user.js"

export interface IUser {
  id?: number | string
  name: string
  email: string
  password?: string
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
      beforeResolver: checkPermissions,
      afterQueryResult: hook_queryUser,
    },
    update: {
      beforeResolver: (args: IHookProps<unknown, unknown>) => {
        args = checkPermissions(args)
        return hook_addAndUpdateUser(args)
      },
    },
    add: {
      beforeResolver: (args: IHookProps<unknown, unknown>) => {
        args = checkPermissions(args)
        return hook_addAndUpdateUser(args)
      },
    },
    delete: {
      beforeResolver: checkPermissions
    }
  },
  backoffice: {
    label: 'Users',
  }
}