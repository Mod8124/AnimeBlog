const mongoose = require('mongoose');
const schema = mongoose.Schema;
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: [isEmail, 'Please enter a valid format email'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    unique: true,
    minlength: [6, 'Minimum password length is 6 character'],
  },
});

// password bcrypt

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw new Error('Incorrect password');
  }
  throw new Error('Incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;
