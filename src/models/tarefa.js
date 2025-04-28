var database = require('../config/database');

class Tarefa {
  static async getAll(page = 1, limit = 10) {
    page = Math.max(1, parseInt(page));
    limit = Math.max(1, parseInt(limit));
    
    var offset = (page - 1) * limit;
    var [tarefa] = await database.query(
      'SELECT id_crud, titulo, descricao FROM tarefa LIMIT ? OFFSET ?',
      [limit, offset]
    );
    var [total] = await database.query('SELECT COUNT(*) AS total FROM tarefa');
    return {
      tarefa, total: total[0].total
    };
  }

  static async getById(id_crud) {
    var [resultado] = await database.query(
      'SELECT * FROM tarefa WHERE id_crud = ?',
      [id_crud]
    );
    return resultado.length ? resultado[0] : null;
  }

  static async create(titulo, descricao) {
    var [resultado] = await database.query(
      'INSERT INTO tarefa (titulo, descricao) VALUES (?, ?)',
      [titulo, descricao]
    );

    if (resultado.affectedRows === 0) {
      throw new Error('Nenhuma tarefa encontrada para renomear');
    }

    return { id_crud: resultado.insertId, titulo, descricao };
  }

  static async update(id_crud, titulo, descricao) {
    var [resultado] = await database.query(
      'UPDATE tarefa SET titulo = ?, descricao = ? WHERE id_crud = ?',
      [titulo, descricao, id_crud]
    );
    
    if (resultado.affectedRows === 0) {
      throw new Error('Nenhuma tarefa encontrada para atualizar');
    }
    
    return { id_crud, titulo, descricao };
  }

  static async delete(id_crud) {
    var [resultado] = await database.query(
      'DELETE FROM tarefa WHERE id_crud = ?',
      [id_crud]
    );
    
    if (resultado.affectedRows === 0) {
      throw new Error('Nenhuma tarefa encontrada para deletar');
    }
    
    return { id_crud, mensagem: 'Tarefa deletada com sucesso' };
  }
}

module.exports = Tarefa;