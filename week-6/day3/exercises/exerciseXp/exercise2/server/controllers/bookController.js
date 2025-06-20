// server/models/bookModel.js
const pool = require('../config/db');

class Book {
    // Get all books
    static async getAllBooks() {
        const result = await pool.query('SELECT * FROM books ORDER BY title ASC');
        return result.rows;
    }

    // Get a book by ID
    static async getBookById(id) {
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        return result.rows[0]; // Return the first row if found, otherwise undefined
    }

    // Create a new book
    static async createBook(title, author, publishedYear) {
        const result = await pool.query(
            'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
            [title, author, publishedYear]
        );
        return result.rows[0]; // Return the newly created book
    }

    // Update an existing book
    static async updateBook(id, title, author, publishedYear) {
        const result = await pool.query(
            'UPDATE books SET title = $1, author = $2, published_year = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
            [title, author, publishedYear, id]
        );
        return result.rows[0]; // Return the updated book
    }

    // Delete a book
    static async deleteBook(id) {
        const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
        return result.rows[0]; // Return the deleted book (if found and deleted)
    }
}

module.exports = Book;