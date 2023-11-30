import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  pasword: { type: String, require: true },
  isActive: { type: Boolean, default: true },
  role: { type: String, enum: ['regular', 'admin'], default: 'regular' },
  isConfirmed: { type: Boolean, default: false },
  confirmationCode: { type: String },
  avatar: { type: String }
}, {
  timestamps: true
});

const User = mongoose.model('user', userSchema);

export { User };
