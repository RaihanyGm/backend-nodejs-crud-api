var express = require('express');
var rotasTarefa = express.Router();
var {
  getAllTarefa,
  getByIdTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa,
} = require('../controllers/controlesTarefa');

rotasTarefa.get('/', getAllTarefa);       
rotasTarefa.get('/:id_crud', getByIdTarefa);    
rotasTarefa.post('/', createTarefa);      
rotasTarefa.put('/:id_crud', updateTarefa);     
rotasTarefa.delete('/:id_crud', deleteTarefa);  

module.exports = rotasTarefa;