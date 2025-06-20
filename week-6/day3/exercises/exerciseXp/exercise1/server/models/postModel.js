// server/models/postModel.js
const pool = require('../config/db');

class Post {
    // Get all posts
    static async getAllPosts() {
        const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        return result.rows;
    }

    // Get a post by ID
    static async getPostById(id) {
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        return result.rows[0]; // Return the first row if found, otherwise undefined
    }

    // Create a new post
    static async createPost(title, content) {
        const result = await pool.query(
            'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
            [title, content]
        );
        return result.rows[0]; // Return the newly created post
    }

    // Update an existing post
    static async updatePost(id, title, content) {
        const result = await pool.query(
            'UPDATE posts SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
            [title, content, id]
        );
        return result.rows[0]; // Return the updated post
    }

    // Delete a post
    static async deletePost(id) {
        const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
        return result.rows[0]; // Return the deleted post (if found and deleted)
    }
}

module.exports = Post;