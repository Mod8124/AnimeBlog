const Blog = require('../models/blogModel');
const fs = require('fs');

const handleErrors = (err) => {
  const errors = {
    title: '',
    body: '',
    img: '',
  };

  if (err.code === 11000) {
    errors.img = 'Sorry that image is already register';
  }

  if (err.message === 'sorry image is required') {
    errors.img = 'sorry image is required';
  }

  if (err.message.includes('blog validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[`${properties.path}`] = `${properties.message}`;
    });
  }

  return errors;
};

const getBlog = async (req, res) => {
  const blogs = await Blog.find();
  res.render('blogs/indexBlog', { blogs });
};

const detailsBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.render('blogs/detailsBlog', { blog });
};

const singleBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (blog) {
      res.status(200).json({
        blog: {
          blogComments: blog.comments,
          blogEmail: blog.email,
        },
      });
    }
  } catch (er) {
    res.status(400).json({ error: 'try again' });
  }
};

const postBlog = async (req, res) => {
  const files = req.file;
  const { title, body } = req.body;
  try {
    if (!files) {
      throw new Error('sorry image is required');
    }
    const img = fs.readFileSync(files.path);
    const imageBased64 = img.toString('base64');

    const final = {
      title,
      body,
      filename: files.originalname,
      contentType: files.mimetype,
      imageBased64,
      user: res.locals.user.email,
    };

    const newblog = await Blog.create(final);

    res.status(200).json({ newblog: newblog._id, location: `/blogs/${newblog._id}` });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, body } = req.body;
  const files = req.file;

  try {
    if (files) {
      const img = fs.readFileSync(files.path);
      const imageBased64 = img.toString('base64');

      const final = {
        title,
        body,
        filename: files.originalname,
        contentType: files.mimetype,
        imageBased64,
      };

      await Blog.findByIdAndUpdate(id, final);

      res.status(200).json({ state: 'update', location: `/blogs/${id}` });
    } else {
      const final = {
        title,
        body,
      };

      const updateBlog = await Blog.findByIdAndUpdate(id, final);
      res.status(200).json({ state: 'update', location: `/blogs/${updateBlog._id}` });
    }
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const updateComment = async (req, res) => {
  const id = req.params.id;
  const { comments } = req.body;

  try {
    if (comments) {
      const updateComment = await Blog.findByIdAndUpdate(id, {
        $push: {
          comments,
          email: res.locals.user.email,
        },
      });
      res.status(200).json({ comments: updateComment.comments, user: updateComment.email });
    } else {
      await Blog.findById(id, req.body);
      res.status(200).json({ location: `/blogs/${id}` });
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ state: 'delete', location: '/blogs' });
  } catch (err) {
    res.status(200).json({ error: 'try again' });
  }
};

module.exports = {
  getBlog,
  detailsBlog,
  singleBlog,
  postBlog,
  updateBlog,
  updateComment,
  deleteBlog,
};
