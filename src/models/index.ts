import productsModel from './products.js'
import rolesModel from './roles.js'
import usersModel from './users.js'
import usersrolesModel from './usersroles.js'
import filesModel from './files.js'

const models = process.env.FUNFUNZ_CONNECTOR === 'json' ? [
  productsModel,
  rolesModel,
  usersModel,
  usersrolesModel,
  filesModel,
] : [
  productsModel,
  rolesModel,
  usersModel,
  usersrolesModel,
]

export default models