const authServices = require('../services/auth');

const loginGet = async (req, res) => authServices.getLogin(req, res);

const loginPost = async (req, res) => authServices.postLogin(req, res);

const signupGet = async (req, res) => authServices.getSignUp(req, res);

const signupPost = async (req, res) => authServices.postSignUp(req, res);

const logout = async (req, res) => authServices.logout(req, res);

module.exports = {
  loginGet,
  loginPost,
  signupGet,
  signupPost,
  logout,
};
