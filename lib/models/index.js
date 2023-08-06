import productsModel from './products';
import rolesModel from './roles';
import usersModel from './users';
import usersrolesModel from './usersroles';
import filesModel from './files';
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
];
export default models;
