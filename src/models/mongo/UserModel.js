import { isValidObjectId } from 'mongoose';
import { User } from '../User.js';

class UserModel {
  static async getUsers () {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getById (id) {
    if (!isValidObjectId(id)) {
      throw new Error('No has pasado un ID de MongoDB.');
    }
    const user = await User.findById(id).catch((error) => {
      throw new Error(error.message);
    });

    return user;
  }
}

export default UserModel;
