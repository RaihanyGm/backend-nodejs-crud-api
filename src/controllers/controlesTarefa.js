const tarefaService = require('../services/tarefaService');
const response = require('../utils/response');

exports.getAllTarefa = async (req, res) => {
  try {
    let { page = 1, limit = 10 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return response.error(res, 400, 'Paginação inválida. Use números maiores que 0.');
    }

    const tarefas = await tarefaService.getAll(page, limit);

    return response.success(res, 200, 'Tarefas listadas com sucesso', tarefas);

  } catch (error) {
    console.error('Erro em getAllTarefa:', error);
    return response.error(res, 500, 'Erro interno ao buscar tarefas', error.message);
  }
};

exports.getByIdTarefa = async (req, res) => {
  try {
    const { id_crud } = req.params;

    if (!id_crud || isNaN(id_crud)) {
      return response.error(res, 400, 'ID inválido');
    }

    const tarefa = await tarefaService.getById(id_crud);

    if (!tarefa) {
      return response.error(res, 404, 'Tarefa não encontrada');
    }

    return response.success(res, 200, 'Tarefa encontrada', tarefa);

  } catch (error) {
    console.error('Erro em getByIdTarefa:', error);
    return response.error(res, 500, 'Erro interno ao buscar tarefa', error.message);
  }
};

exports.createTarefa = async (req, res) => {
  try {
    const { titulo, descricao } = req.body;

    if (!titulo || !descricao) {
      return response.error(res, 400, 'Título e descrição são obrigatórios');
    }

    const id = await tarefaService.create(titulo, descricao);

    return response.success(res, 201, 'Tarefa criada com sucesso', { id });

  } catch (error) {
    console.error('Erro em createTarefa:', error);
    return response.error(res, 500, 'Erro ao criar tarefa', error.message);
  }
};

exports.updateTarefa = async (req, res) => {
  try {
    const { id_crud } = req.params;
    const { titulo, descricao } = req.body;

    if (!id_crud || isNaN(id_crud)) {
      return response.error(res, 400, 'ID inválido');
    }

    if (!titulo || !descricao) {
      return response.error(res, 400, 'Título e descrição são obrigatórios');
    }

    await tarefaService.update(id_crud, titulo, descricao);

    return response.success(res, 200, 'Tarefa atualizada com sucesso');

  } catch (error) {
    console.error('Erro em updateTarefa:', error);
    return response.error(res, 500, 'Erro ao atualizar tarefa', error.message);
  }
};

exports.deleteTarefa = async (req, res) => {
  try {
    const { id_crud } = req.params;

    if (!id_crud || isNaN(id_crud)) {
      return response.error(res, 400, 'ID inválido');
    }

    await tarefaService.delete(id_crud);

    return response.success(res, 200, 'Tarefa deletada com sucesso');

  } catch (error) {
    console.error('Erro em deleteTarefa:', error);
    return response.error(res, 500, 'Erro ao deletar tarefa', error.message);
  }
};