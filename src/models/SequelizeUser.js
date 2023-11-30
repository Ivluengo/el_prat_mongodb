import { DataTypes } from 'sequelize';

import { sequelize } from '../db/connectDBSequelize.js';

const User = sequelize.define('users', {
  user_id: { type: DataTypes.INTEGER, primaryKey: true },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
  role: { type: DataTypes.STRING, defaultValue: 'regular' },
  is_confirmed: { type: DataTypes.BOOLEAN, defaultValue: false },
  confirmation_code: { type: DataTypes.STRING },
  avatar: { type: DataTypes.STRING }
});

export { User };
