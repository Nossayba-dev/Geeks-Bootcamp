// server/controllers/postController.js
const Post = require('../models/postModel');

// Get all blog posts
exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.getAllPosts();
        res.json(posts);
    } catch (err) {
        next(err); // Pass error to the global error handler
    }
};

// Get a specific blog post by ID
exports.getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.getPostById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found.' });
        }
        res.json(post);
    } catch (err) {
        next(err);
    }
};

// Create a new blog post
exports.createPost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required.' });
        }
        const newPost = await Post.createPost(title, content);
        res.status(201).json(newPost); // 201 Created
    } catch (err) {
        next(err);
    }
};

// Update an existing blog post
exports.updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required for update.' });
        }

        const updatedPost = await Post.updatePost(id, title, content);
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found.' });
        }
        res.json(updatedPost);
    } catch (err) {
        next(err);
    }
};

// Delete a blog post
exports.deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.deletePost(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found.' });
        }
        res.status(204).send(); // 204 No Content
    } catch (err) {
        next(err);
    }
};