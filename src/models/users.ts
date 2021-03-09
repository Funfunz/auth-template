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
  roles: {
    create: [
      'all'
    ],
    read: [
      'all'
    ],
    update: [
      'all'
    ],
    delete: [
      'all'
    ]
  },
  relations: [
    {
      type: 'm:n',
      relationalTable: 'usersroles',
      foreignKey: 'userId',
      remoteTable: 'roles',
      remoteForeignKey: 'roleId',
    },
    {
      type: '1:n',
      relationalTable: 'products',
      foreignKey: 'id',
      remoteForeignKey: 'userId',
      remoteTable: 'products',
    }
  ],
  properties: [
    {
      name: 'id',
      searchable: true,
      model: {
        type: 'number',
        allowNull: false,
        isPk: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: false
        },
        label: 'Id',
        listColumn: {},
        editField: {
          type: 'number'
        }
      }
    },
    {
      name: 'email',
      searchable: true,
      model: {
        type: 'string',
        allowNull: false
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: false
        },
        label: 'Email',
        listColumn: {},
        editField: {
          type: 'text'
        }
      }
    },
    {
      name: 'name',
      searchable: true,
      model: {
        type: 'string',
        allowNull: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: true
        },
        label: 'Name',
        listColumn: {},
        editField: {
          type: 'text'
        }
      }
    },
    {
      name: 'password',
      searchable: true,
      visible: {
        list: true,
        detail: true,
        relation: false
      },
      model: {
        type: 'string',
        allowNull: true
      },
      layout: {
        visible: {
          entityPage: false,
          detail: true,
          relation: false
        },
        label: 'Password',
        listColumn: {},
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
    listPage: {},
    searchField: {},
    createButton: {},
    editButton: {},
    deleteButton: {},
    editPage: {
      sections: []
    }
  }
}