const db = require('../config/database');

exports.getAll = async (page, limit) => {
  const offset = (page - 1) * limit;

  const [rows] = await db.query(
    'SELECT * FROM tarefas LIMIT ? OFFSET ?',
    [limit, offset]
  );

  return rows;
};

exports.getById = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM tarefas WHERE id_crud = ?',
    [id]
  );

  return rows[0];
};

exports.create = async (titulo, descricao) => {
  const [result] = await db.query(
    'INSERT INTO tarefas (titulo, descricao) VALUES (?, ?)',
    [titulo, descricao]
  );

  return result.insertId;
};

exports.update = async (id, titulo, descricao) => {
  await db.query(
    'UPDATE tarefas SET titulo = ?, descricao = ? WHERE id_crud = ?',
    [titulo, descricao, id]
  );
};

exports.delete = async (id) => {
  await db.query(
    'DELETE FROM tarefas WHERE id_crud = ?',
    [id]
  );
};