const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogshema = new schema(
  {
    title: {
      type: String,
      required: [true, 'The title is required'],
    },

    body: {
      type: String,
      required: [true, 'The body is required'],
    },

    user: {
      type: String,
      required: true,
    },

    filename: {
      type: String,
      unique: true,
      required: true,
    },

    contentType: {
      type: String,
      required: true,
    },

    imageBased64: {
      type: String,
      required: true,
    },

    comments: {
      type: [String],
      required: false,
    },

    email: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model('blog', blogshema);

module.exports = Blog;
