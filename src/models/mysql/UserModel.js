import { sendQuery } from '../../db/connectDB.js';

class UserModel {
  static async getUsers () {
    try {
      const users = await sendQuery('SELECT * FROM users');
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getById (id) {
    const user = await sendQuery('SELECT * FROM users WHERE user_id = ?', [id]).catch((error) => {
      throw new Error(error.message);
    });

    return user;
  }
}

export default UserModel;
