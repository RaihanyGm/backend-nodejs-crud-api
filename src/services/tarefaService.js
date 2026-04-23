const TarefaModel = require('../models/tarefa');

exports.getAll = async (page, limit) => {
  return await TarefaModel.getAll(page, limit);
};

exports.getById = async (id) => {
  return await TarefaModel.getById(id);
};

exports.create = async (titulo, descricao) => {
  return await TarefaModel.create(titulo, descricao);
};

exports.update = async (id, titulo, descricao) => {
  return await TarefaModel.update(id, titulo, descricao);
};

exports.delete = async (id) => {
  return await TarefaModel.delete(id);
};