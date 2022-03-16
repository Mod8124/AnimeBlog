const jwt = require('jsonwebtoken')
const User = require('../models/authModel')
const multer = require('multer')


const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
  
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, 'secret', (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.redirect('/login');
        } else {
          next();
        }
      });
    } else {
      res.redirect('/login');
    }
  };

  const storage = multer.diskStorage({
    destination:function (req,file, cb) {
      cb(null, 'upload')
    },
    filename:function(req, file, cb) {
      var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
      cb(null,file.fieldname + '-' + Date.now() + ext)
    }
  })
  
  const uploads = multer({storage:storage})
  
  const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
  
    if(token) {
      jwt.verify(token, 'secret', async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken.id)
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  }


  module.exports = {
      requireAuth,
      checkUser,
      uploads
  } ;