var TarefaModel = require('../models/tarefa'); 

exports.getAllTarefa = async (req, res) => {
  try {
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return res.status(400).json({
        sucesso: false, 
        mensagem: 'Paginação inválida. Use o número maior que 0.'});
    }

    var tarefas = await TarefaModel.getAll(page, limit);
    res.status(200).json({ 
       sucesso: true,
       mensagem: 'Tarefa recuperada com sucesso',
       dados: tarefas, 
       paginas: {page, limit }});
  } catch (error) {
    console.error('Erro em getAllTarefa:', error);
    res.status(500).json({ 
       sucesso: false,
       mensagem: 'Erro interno ao buscar tarefa'});
  }
};

exports.getByIdTarefa = async (req, res) => {
  try {
    var { id_crud } = req.params;
    if (!id_crud || isNaN(id_crud)) {
      return res.status(400).json({ 
        sucesso: false,
        mensagem: 'Erro ao encontrar a id'});
    }

    var tarefa = await TarefaModel.getById(id_crud);
    if (!tarefa) {
      return res.status(404).json({ 
        sucesso: false,
        mensagem: 'Tarefa não encontrada'});
    }
    res.status(200).json({ 
      sucesso: true,
      mensagem: 'Tarefa encontrada',
      dados: tarefa});
  } catch (error) {
    console.error('Erro em getByIdTarefa:', error);
    res.status(500).json({ 
      sucesso: false,
      mensagem: ' Erro ao encontra tarefa'});
  }
};

exports.createTarefa = async (req, res) => {
  try {
    var { titulo, descricao } = req.body;
    if (!titulo || !descricao) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Titulo é obrigatório'});
    }
    
    var novaTarefa = await TarefaModel.create(titulo, descricao);
    res.status(201).json({ 
      sucesso: true,
      mensagem: 'Tarefa criada com sucesso'});
  } catch (error) {
    console.error('Erro em createTarefa:', error);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao criar tarefa'});
  }
};

exports.updateTarefa = async (req, res) => {
  try {
    var { id_crud } = req.params;
    var { titulo, descricao } = req.body;
    
    if (!id_crud || isNaN(id_crud)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: 'ID não encontrado'});
    }
    if (!titulo || !descricao) {
      return res.status(400).json({ 
        sucesso: false,
        mensagem: 'Título é obrigatório' });
    }

    var putTarefa = await TarefaModel.update(id_crud, titulo, descricao);
    res.status(200).json({ 
      sucesso: true,
      mensagem: 'Tarefa renomeada com sucesso'});
  } catch (error) {
    console.error('Erro em updateTarefa:', error);
    res.status(500).json({ 
      sucesso: false,
      mensagem: 'Erro ao atualizar tarefa'});
  }
};

exports.deleteTarefa = async (req, res) => {
  try {
    var { id_crud } = req.params;
    if (!id_crud || isNaN(id_crud)) {
      return res.status(400).json({ 
        sucesso: false,
        mensagem: 'ID não encontrado' });
    }

    var deleteTarefa = await TarefaModel.delete(id_crud);
    res.status(200).json({ 
      sucesso: true,
      mensagem: 'Tarefa deletada com sucesso'});
  } catch (error) {
    console.error('Erro em deleteTarefa:', error);
    res.status(500).json({ 
      sucesso: false,
      mensagem: 'Erro ao deletar tarefa'});
  }
};