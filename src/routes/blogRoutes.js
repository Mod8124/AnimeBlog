const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers');
const authController = require('../controllers/authController');
const { requireAuth, uploads } = require('../middlewares/authMiddleware');

// login
router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);
router.get('/signup', authController.signupGet);
router.post('/signup', authController.signupPost);
router.get('/logout', authController.logout);

// CRUD blog
router.get('/blogs', requireAuth, blogController.blogIndex);
router.get('/blogs/:id', requireAuth, blogController.blogDetails);
router.get('/blogs/single/:id', blogController.blogSingle);
router.post('/blogs', uploads.single('image'), blogController.blogPost);
router.put('/blogs/update/:id', uploads.single('image'), blogController.blogUpdate);
router.put('/blogs/comments/:id', blogController.blogUpdateComment);
router.delete('/blogs/:id', blogController.blogDelete);

module.exports = router;
