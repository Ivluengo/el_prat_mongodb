import { User } from '../SequelizeUser.js';

class UserModel {
  static async getUsers () {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getById (id) {
    const user = await User.findByPk(id);

    return user;
  }
}

export default UserModel;
