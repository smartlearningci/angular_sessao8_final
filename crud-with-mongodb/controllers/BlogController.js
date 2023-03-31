const blogService = require("../services/BlogService");
 
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();

    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createBlog = async (req, res) => {


  try {
      
    const blog = await blogService.createBlog(req.body);

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
 
exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogService.deleteBlog(req.params.id);

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};