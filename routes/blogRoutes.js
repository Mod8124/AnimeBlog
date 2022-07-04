const express = require('express')
const router = express.Router();
const blogController = require('../controllers/blogControllers');
const authController = require('../controllers/authController')
const {requireAuth, uploads, checkUser } = require('../middlewares/authMiddleware');

//login
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/signup',authController.signup_get);
router.post('/signup',authController.signup_post);
router.get('/logout', authController.logout);

//crud blog
router.get('/blogs',requireAuth, blogController.blogIndex);
router.get('/blogs/:id', requireAuth, blogController.blogDetails);
router.get('/blogs/single/:id', blogController.blogSingle)
router.post('/blogs',uploads.single('image'), blogController.blogPost);
router.put('/blogs/update/:id', uploads.single('image'), blogController.blogUpdate);
router.put('/blogs/comments/:id', blogController.blogUpdateComment);
router.delete('/blogs/:id', blogController.blogDelete);

module.exports = router;