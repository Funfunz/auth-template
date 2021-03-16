import { IHookProps } from "@funfunz/core"
import { checkPermissions } from "@root/hooks/permissions"
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