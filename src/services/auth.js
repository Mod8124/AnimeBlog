const jwt = require('jsonwebtoken');
const User = require('../models/authModel');
const maxAge = 3 * 24 * 60 * 60;

const handleErrors = (err) => {
  const errors = { email: '', password: '' };

  if (err.code === 11000) {
    errors.email = 'That email is already register';
  }

  if (err.message === 'incorrect email') {
    errors.email = 'Email is incorrect';
  }

  if (err.message === 'Incorret password') {
    errors.password = 'Password is incorrect';
  }

  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[`${properties.path}`] = `${properties.message}`;
    });
  }
  return errors;
};

const createToken = (id) => {
  return jwt.sign({ id }, 'secret', { expiresIn: maxAge });
};

const getLogin = async (req, res) => {
  res.render('login');
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, redirect: '/blogs' });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const getSignUp = async (req, res) => {
  res.render('signup');
};

const postSignUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(200).json({ user: user._id, location: '/' });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const logout = async (req, res) => {
  res.cookie('jwt', '', { maxAge: 1, httpOnly: true });
  res.redirect('/');
};

module.exports = {
  getLogin,
  postLogin,
  getSignUp,
  postSignUp,
  logout,
};
