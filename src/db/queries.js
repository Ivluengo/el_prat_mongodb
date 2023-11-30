const query = {
  getAllUsers: 'SELECT * FROM users',
  getUserById: 'SELECT * FROM users WHERE user_id = ?',
  addUser: 'INSERT INTO users (username, email, password, confirmation_code) VALUES (?, ?, ?, ?)',
  checkEmail: 'SELECT * FROM users WHERE email = ?',
  checkConfirmationCode: 'SELECT * FROM users WHERE confirmation_code = ?',
  confirmUser: 'UPDATE users SET is_confirmed = true, updated_at = NOW(), confirmation_code = null WHERE user_id = ?',
  deleteUser: 'DELETE FROM users WHERE user_id = ?',
  addAvatarName: 'UPDATE users SET avatar = ? WHERE user_id = ?',
  checkExistingAvatar: 'SELECT avatar FROM users WHERE user_id = ?'
};

export { query };
