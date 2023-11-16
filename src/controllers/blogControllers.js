const blogServices = require('../services/blog');

const blogIndex = async (req, res) => blogServices.getBlog(req, res);

const blogDetails = async (req, res) => blogServices.detailsBlog(req, res);

const blogSingle = async (req, res) => blogServices.singleBlog(req, res);

const blogPost = async (req, res) => blogServices.postBlog(req, res);

const blogUpdateComment = async (req, res) => blogServices.updateComment(req, res);

const blogUpdate = async (req, res) => blogServices.updateBlog(req, res);

const blogDelete = async (req, res) => blogServices.deleteBlog(req, res);

module.exports = {
  blogIndex,
  blogDetails,
  blogSingle,
  blogPost,
  blogUpdate,
  blogUpdateComment,
  blogDelete,
};
