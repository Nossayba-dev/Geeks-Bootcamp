const pool = require('../config/db');

const createUser = async ({ email, username, first_name, last_name }) => {
  const result = await pool.query(
    'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
    [email, username, first_name, last_name]
  );
  return result.rows[0];
};

const savePasswordHash = async ({ username, hashedPassword }) => {
  const result = await pool.query(
    'INSERT INTO hashpwd (username, password) VALUES ($1, $2) RETURNING *',
    [username, hashedPassword]
  );
  return result.rows[0];
};

const findUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM hashpwd WHERE username = $1', [username]);
  return result.rows[0];
};

const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const updateUserById = async (id, userData) => {
  const { email, username, first_name, last_name } = userData;
  const result = await pool.query(
    'UPDATE users SET email = $1, username = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING *',
    [email, username, first_name, last_name, id]
  );
  return result.rows[0];
};

module.exports = {
  createUser,
  savePasswordHash,
  findUserByUsername,
  getAllUsers,
  getUserById,
  updateUserById,
};