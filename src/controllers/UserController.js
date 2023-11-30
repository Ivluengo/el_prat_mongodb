import UserModel from '../models/mongo/UserModel.js';
// import UserModel from '../models/mysql/UserModel.js';
// import UserModel from '../models/sequelize/UserModel.js';

class UserController {
  static async getAll (req, res, next) {
    // validaciones

    // le pido al modelo que me devuelva info de la BBDD
    try {
      const users = await UserModel.getUsers();
      res.send(users);
    } catch (error) {
      next(error);
    }
  }

  static async getById (req, res, next) {
    const { userId } = req.params;
    const user = await UserModel.getById(userId);

    if (!user) {
      return next(new Error('No se ha encontrado un usuario con ese ID'));
    }

    res.send(user);
  }
}

export default UserController;
