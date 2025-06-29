const db = require('../config/db');

const getAllBooks = async () => {
  const result = await db.query('SELECT * FROM books');
  return result.rows;
};

const getBookById = async (id) => {
  const result = await db.query('SELECT * FROM books WHERE id = $1', [id]);
  return result.rows[0];
};

const createBook = async (title, author, published_year) => {
  const result = await db.query(
    'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
    [title, author, published_year]
  );
  return result.rows[0];
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};